import React from "react";
import styles from "./PokemonCard.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import image1 from '../../images/testPokemon.png'

const PokemonCard = (props) => {
  const {image, name,pokeKey} = props;
  return (
    <>
      <div className={styles.card} key={pokeKey}>
        <div  className={styles.topRow}>
          <div className={styles.imageWrapper}><img src={image1} alt="pokemon image" /></div>
          <div className={styles.favourite}>
            <FontAwesomeIcon icon={faHeart} className={styles.heartIcon} />
          </div>
        </div>
        <div className={styles.bottomRow}>
          <h2>{name}</h2>
          <div >
            <ul className={styles.listOfSkills}>
              <li>
                <p>One</p>
              </li>
              <li>
                <p>Two</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonCard;
