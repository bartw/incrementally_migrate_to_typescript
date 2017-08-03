import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

test("Given an App When it renders Then no errors are thrown", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});