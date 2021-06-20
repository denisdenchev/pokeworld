import React from "react";
import { render } from "@testing-library/react";
import Compare from "./Compare";

describe("Compare tests", () => {
  it("should render", () => {
    expect(render(<Compare />)).toBeTruthy();
  });
});
