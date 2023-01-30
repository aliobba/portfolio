/* import React from "react";
function Pre(props) {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}

export default Pre;
 */
import React from "react";
import "./Pre.css";
function Pre(props) {
  if (props.load) {
    return (
      <div className={props.load ? "body" : "pl-none"}>
        <div className="pl">
          <div className="pl__outer-ring"></div>
          <div className="pl__inner-ring"></div>
          <div className="pl__track-cover"></div>
          <div className="pl__ball">
            <div className="pl__ball-texture"></div>
            <div className="pl__ball-outer-shadow"></div>
            <div className="pl__ball-inner-shadow"></div>
            <div className="pl__ball-side-shadows"></div>
          </div>
        </div>
      </div>
    );
  }

  return <div className="pl-none"></div>;
}

export default Pre;
