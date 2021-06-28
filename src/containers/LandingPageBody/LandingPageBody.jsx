import React, {useState,useEffect} from "react";
import styles from "./LandingPageBody.module.scss";
import PokemonCard from "../../components/PokemonCard";
import react from "react";

const LandingPageBody = () => {

  

  const [data, setData] = useState([]);
	
	const [pageNo,setPageNo] = useState(1);

  const [offSet,setOffSet] = useState(0)

  let limit = 10;

  
  useEffect(()=>{
		getData();
	},[]);


  const getData = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offSet}`)
    .then(response => response.json())
    .then((response) => {if(pageNo > 1) {
      let arr = [...data, ...response.results];
      setData(arr);
    } else {
      setData(response.results)
    }})
    .catch(error => console.log(error))
    displayData()
  }


  const firstEvent = (e) => {
		var bottom = e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight < 50;
		if(bottom){
			let pg = pageNo + 1;
      let currentOffSet = offSet + limit;
      setOffSet(currentOffSet)
			setPageNo(pg);
			getData();
      console.log(offSet)
		}
	}

  const displayData = () => {
    console.log(data)
  }



  return (
    <>
    <div className={styles.landingPageBody} onScroll={firstEvent}>
			{/* <input type='button' value='Fetch' onClick={displayData} /> */}
      {data.map((record) => {
      return (
      <PokemonCard name={record.name} pokeKey={record.name} />)})}
    </div>
    </>
  );
};

export default LandingPageBody;
