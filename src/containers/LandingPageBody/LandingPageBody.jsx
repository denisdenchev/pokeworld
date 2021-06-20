import React, {useState,useEffect} from "react";
import styles from "./LandingPageBody.module.scss";
import PokemonCard from "../../components/PokemonCard";

const LandingPageBody = () => {
	const [pokemonData, setPokemonData] = useState([]);

  // const fetchData = async () => {
	// 	await fetch(' https://pokeapi.co/api/v2/pokemon')
	// 		.then((response) => response.json())
	// 		.then((data) =>  setPokemonData(data));

	// 	logData();
	// };

  const displayData = () => {
    console.log(pokemonData)
  }
	

  useEffect(async () => {
    await fetch(' https://pokeapi.co/api/v2/pokemon')
    .then((response) => response.json())
    .then ((data) => setPokemonData(data.result))
  },[]);

  return (
    <>
			<input type='button' value='Alert the text input' onClick={displayData} />
      <PokemonCard />
    </>
  );
};

export default LandingPageBody;
