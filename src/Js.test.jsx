import React from "react";
import { shallow } from "enzyme";
import { Js } from "./Js";

test("Given an Js When it renders Then no errors are thrown", () => {
  shallow(<Js />);
});
