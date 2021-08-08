import React, { useState } from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
import axios from "axios";
import './style.css';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [pokemonData, setPokemonData] = useState({});
  const [showPokeCard, setShowPokeCard] = useState(false);

  const fetchBtn = async () => {
    const res = await axios.get(` https://pokeapi.co/api/v2/pokemon`);
    const { data: { results = [] } = {} } = res;
    if (results) {
      setShowResult(true);
      setShowPokeCard(false);
      setPokemons(results);
    }
  };

  const pokeCard = async (e, detail) => {
    e.preventDefault();

    const res = await axios.get(detail);
    const { data = {} } = res;

    if (data) {
      setShowResult(false);
      setShowPokeCard(true);
      setPokemonData(data);
    }
  };

  return (
    <>
      <div className="pokemons">
        <h1>Gotta catch 'em all</h1>

        <button onClick={fetchBtn}> {!showPokeCard ? "Get Pokemon" : "Get Other Pokemons"}</button>
      </div>

      {showResult && !showPokeCard && (
        <div>
          {pokemons.map((pokemon, index) => {
            const { name = "", url: details = {} } = pokemon || {};
            return (
              <div
                key={index}
                id={`pokemon_${name}_${index}`}
                className="pokemon"
              >
                <figure
                  className="card card--normal"
                  onClick={(e) => pokeCard(e, details)}
                >
                  <figcaption className="card__caption">
                    <h1 className="card__name">{name}</h1>

                    <div className="card__abilities">
                      <h4 className="card__ability">
                        Click on Card to know more
                      </h4>
                    </div>
                  </figcaption>
                </figure>
              </div>
            );
          })}
        </div>
      )}
      {showPokeCard && !showResult && <PokemonCard props={pokemonData} />}
    </>
  );
}

export default App;
