import {} from "jest";
import TsClass from "./TsClass";

test("Given a TsClass When getValue Then 'ts' is returned", () => {
  const tsClass = new TsClass();
  expect(tsClass.getValue()).toBe("ts");
});
