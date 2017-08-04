import * as _ from "lodash";

export default class TsClass {
  private value: string[];

  public constructor() {
    this.value = ["t", "s"];
  }

  public getValue() {
    return _(this.value).reduce((concat, item) => (concat = concat + item), "");
  }
}
