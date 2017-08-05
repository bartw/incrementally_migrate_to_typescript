import * as React from "react";
import * as ReactDOM from "react-dom";
import { Ts } from "./Ts";

test("Given an Ts When it renders Then no errors are thrown", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Ts />, div);
});