import React from "react";

function Button(props) {
  function bgChange() {
    document
      .getElementById("background")
      .setAttribute("style", `background-color: ${props.code}`);
    document
      .getElementById("holder")
      .setAttribute(`style", "background-color: ${props.code}`);
  }

  return (
    <button
      onClick={bgChange}
      style={{
        backgroundColor: props.code,
        textShadow: `1px 1px 2px black`,
      }}
    >
      {props.color}
    </button>
  );
}

export default Button;
