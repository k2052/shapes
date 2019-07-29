// Builds a pdf using puppeteer
const http = require("http");
const path = require("path");
const mkdirp = require("mkdirp");
const puppeteer = require("puppeteer");
const SERVER = "http://localhost:3000";
const OUT_DIR = path.join(__dirname, "../formats/pdf");

function sleep(ms = 0) {
  return new Promise(r => setTimeout(r, ms));
}

const fetchResponse = (p) => {
  return new Promise((resolve, reject) => {
    try {
      const request = http.request(p ? path.join(SERVER, p) : SERVER, response =>
        resolve(response.statusCode)
      );
      request.on("error", err => reject(err));
      request.end();
    } catch (err) {
      reject(err);
    }
  });
};

const reachableServer = () => {
  console.log("Connected to server ...");

  return fetchResponse().then(statusCode => {
    if (statusCode === 200) {
      // 200 OK
      return true;
    }

    throw Error(
      `Unable to connect to server. Received status code: ${statusCode}`
    );
  });
};

const makeOutDir = () => {
  return new Promise((resolve, reject) => {
    mkdirp(OUT_DIR, err => {
      if (!err) {
        resolve();
        return;
      }

      reject(err);
    });
  });
};

const exportPage = async (pagePath) => {
  const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
  const page = await browser.newPage();
  await page.goto(SERVER + "/" + pagePath, { waitUntil: "networkidle2" });

  await sleep(2000);

  await page.pdf({
    path: path.join(OUT_DIR, pagePath + ".pdf"),
    format: "letter"
  });

  await browser.close();
}

const convert = async () => {
  await reachableServer();
  await makeOutDir();
  console.log("Exporting PDF...");
  await exportPage("all");

  console.log("Finished Building PDF");
};

convert().catch(reason => {
  console.error(`${reason}`);
  process.exit(1);
});
