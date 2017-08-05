import React from "react";
import { Js } from "./Js";
import { Ts } from "./Ts";

export function App() {
  return (
    <div>
      <h1>Incrementally migrate your webpack project to TypeScript</h1>
      <Js />
      <Ts />
    </div>
  );
}
