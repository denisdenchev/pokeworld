import React from "react";
import { render } from "@testing-library/react";
import LandingPageBody from "./LandingPageBody";

describe("LandingPageBody tests", () => {
  it("should render", () => {
    expect(render(<LandingPageBody />)).toBeTruthy();
  });
});
