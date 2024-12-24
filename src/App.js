import { useEffect, useState } from "react";
import "./App.css";
import { getAllPokemon, getPokemon } from "./pokemon";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon";
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      let res = await getAllPokemon(initialURL);
      //console.log(res);
      // 各ポケモンの詳細なデータを取得
      loadPokemon(res.results);

      setLoading(false);
    };
    fetchPokemonData();
  }, []);

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map((pokemon) => {
        //console.log(pokemon);
        let pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };
  console.log(pokemonData);
  return (
    <>
      <Navbar />
      <div className="App">
        {loading ? (
          <h1>ロード中</h1>
        ) : (
          <>
            <div className="pokemonCardContainer">
              {pokemonData.map((pokemon, i) => {
                return (
                  <Card key={i} pokemon={pokemon}>
                    Pokemon
                  </Card>
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
