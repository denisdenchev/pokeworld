import React from "react";
import styles from "./LandingPageBody.module.scss";
import Navigation from "../../components/Navigation";
import PokemonCard from "../../components/PokemonCard";

const LandingPageBody = () => {
  return (
    <>
      <Navigation />
      <PokemonCard />
    </>
  );
};

export default LandingPageBody;
