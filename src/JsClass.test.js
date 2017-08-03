import JsClass from "./JsClass";

test("Given a JsClass When getValue Then 'js' is returned", () => {
  const jsClass = new JsClass();
  expect(jsClass.getValue()).toBe("js");
});