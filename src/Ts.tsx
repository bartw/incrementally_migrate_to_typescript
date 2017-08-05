import * as React from "react";
import TsClass from "./TsClass";

export function Ts() {
  const ts = new TsClass();

  return (
    <p>
      Value from ts: {ts.getValue()}
    </p>
  );
}
