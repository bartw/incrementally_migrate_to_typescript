import * as React from "react";
import * as enzyme from "enzyme";
import { Ts } from "./Ts";

test("Given an Ts When it renders Then no errors are thrown", () => {
  enzyme.shallow(<Ts />);
});