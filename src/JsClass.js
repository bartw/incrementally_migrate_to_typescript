import _ from "lodash";

export default class JsClass {
  getValue = () =>
    _(["j", "s"]).reduce((concat, item) => (concat = concat + item), "");
}
