import React from "react";
import JsClass from "./JsClass";

export function Js() {
  const js = new JsClass();

  return (
    <p>
      Value from js: {js.getValue()}
    </p>
  );
}
