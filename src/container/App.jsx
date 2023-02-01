import { useEffect, useState } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import playersData from "./api";
import DefaultPlayers from "./DefaultPlayers";

function App() {
  const [players, setPlayers] = useState(playersData);
  const [searchFiled, setSearchField] = useState("");
  const [results, setResults] = useState("Our Top Pick For You");

  function playerNameChange(event) {
    setSearchField(event.target.value);
    // console.log(event.target.value);
  }

  const playersArray = players.filter((player) =>
    player.name
      .toLowerCase()
      .replace(/\s/g, "")
      .includes(searchFiled.toLowerCase().replace(/\s/g, ""))
  );

  const clubsArray = players.filter((player) =>
    player.Club.toLowerCase()
      .replace(/\s/g, "")
      .includes(searchFiled.toLowerCase().replace(/\s/g, ""))
  );

  const countryArray = players.filter((player) =>
    player.nationalTeam
      .toLowerCase()
      .replace(/\s/g, "")
      .includes(searchFiled.toLowerCase().replace(/\s/g, ""))
  );

  const mappingDataArray =
    playersArray.length > 0 && playersArray.length > clubsArray.length
      ? playersArray
      : clubsArray.length > 0 && clubsArray.length > countryArray.length
      ? clubsArray
      : countryArray;

  useEffect(() => {
    if (searchFiled.length === 0) {
      setPlayers(DefaultPlayers);
      setResults("Our Top Picks For You");
    } else {
      setPlayers(playersData);
      setResults(mappingDataArray.length);
    }
  }, [searchFiled]);

  return (
    <div>
      <h1 className="text-black opacity-50 text-[2em] md:text-[3.5em] font-semibold	m-10 text-center uppercase tracking-[.2em] md:tracking-[.3em]">
        FootBall Players Stats
      </h1>
      <SearchBox playerNameChange={playerNameChange} />
      <h1 className="text-black opacity-80 text-[10px] md:text-[20px] font-semibold	m-3 text-center uppercase tracking-[.1em] md:tracking-[.1em]">
        Results: {results}
      </h1>
      <CardList mappingDataArray={mappingDataArray} />
      <h1 className="text-black opacity-50 text-[18px] md:text-[25px] font-bold md:font-semibold	m-10 text-center uppercase ">
        All Rights reserved to{" "}
        <a href="https://abdelrhmanbakr.com/" target="_blank">
          AbdElrhmanBakr
        </a>
      </h1>
    </div>
  );
}

export default App;
