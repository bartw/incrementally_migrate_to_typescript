import React from "react";
import JsClass from "./JsClass";
import TsClass from "./TsClass";

export default function App() {
  const js = new JsClass();
  const ts = new TsClass();

  return (
    <div>
      <h1>Incrementally migrate your webpack project to TypeScript</h1>
      <p>
        Value from js: {js.getValue()}
      </p>
      <p>
        Value from ts: {ts.getValue()}
      </p>
    </div>
  );
}
