import React from "react";
import { render } from "@testing-library/react";
import PokemonCard from "./PokemonCard";

describe("PokemonCard tests", () => {
  it("should render", () => {
    expect(render(<PokemonCard />)).toBeTruthy();
  });
});
