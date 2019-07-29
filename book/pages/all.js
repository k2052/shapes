import React from "react";
import classnames from "classnames";
import mdstyles from "md-styles/themes/solarized-light.css";
import hljsstyles from "../styles/hljs.css";
import Introduction from "../chapters/01_Introduction.org";
import Setup from "../chapters/01s_SettingUpARubyDevEnvironment.org";

import Rack from "../chapters/02_Rack.org";
import Requests from "../chapters/03_Requests.org";
import Responses from "../chapters/04_Responses.org";
import MVC from "../chapters/05_Mvc.org";
import BuildingaRouter from "../chapters/05s_BuildingaRouter.org";
import DesigningYourFramework from "../chapters/06_DesigningYourFramework.org";
import BuildingYourFramework from "../chapters/07_BuildingYourFramework.org";
import Patterns from '../chapters/08_PatternsWithYourFramework.org';
/*
  <MVC/>
*/
const All = () => {
  return (
    <div className={classnames(mdstyles.markdownBody, hljsstyles.hljs)}>
      <Introduction/>
      <Setup/>
      <Rack/>
      <Requests/>
      <Responses/>
      <MVC/>
      <BuildingaRouter/>
      <DesigningYourFramework/>
      <BuildingYourFramework/>
      <Patterns/>
    </div>
  )
}
export default All;
