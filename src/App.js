import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import Karakter from "./components/Karakter";
//import Search from "./components./Search";
//import Karakter from "./components./Karakter";

// Try to think through what state you'll need for this app before starting. Then build out
// the state properties here.

// Fetch characters from the API in an effect hook. Remember, anytime you have a
// side effect in a component, you want to think about which state and/or props it should
// sync up with, if any.
const App = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [karakter, setKarakter] = useState("");

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((response) => setData(response.data));
  }, []);

  function tiklama(isim) {
    setKarakter(isim === karakter ? null : isim);
  }

  return (
    <div className="App">
      <h1 className="Header">Star Wars Major Characters List</h1>

      <img
        className="im"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1041px-Star_Wars_Logo.svg.png	"
      />
      <img
        className="im1"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1041px-Star_Wars_Logo.svg.png	"
      />

      {<Search setSearch={setSearch} search={search} />}
      {data
        .filter((character) => {
          if (search === "") {
            return character;
          } else if (
            character.isim.toLowerCase().includes(search.toLocaleLowerCase())
          ) {
            return character;
          }
        })
        .map((character) => {
          return (
            <Karakter
              key={character.isim}
              data={character}
              tiklama={tiklama}
              karakter={karakter}
              setKarakter={setKarakter}
            />
          );
        })}
    </div>
  );
};

export default App;
