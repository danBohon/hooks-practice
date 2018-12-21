import React, { useState, useEffect } from "react";
import axios from "axios";

export default function NewPokeFetcher() {
  const [pokeData, setPokeData] = useState(null);
  useEffect(() => {
    if (pokeData === null) {
      axios.get("https://api.pokemontcg.io/v1/cards?pageSize=5").then(res => {
        setPokeData(res.data.cards);
      });
    }
  });

  const result =
    pokeData &&
    pokeData.map(item => {
      return <img src={item.imageUrl} />;
    });

  return <div>{result}</div>;
}
