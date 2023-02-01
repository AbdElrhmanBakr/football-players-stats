import Card from "./Card";

export default function CardList({ mappingDataArray }) {
  const playersCard = mappingDataArray.map((player) => (
    <Card
      key={player.id}
      id={player.id}
      img={player.img}
      name={player.name}
      age={player.age}
      weight={player.weight}
      height={player.height}
      footed={player.footed}
      position={player.position}
      club={player.Club}
      nationalTeam={player.nationalTeam}
      birthDate={player.birthDate}
      birthPlace={player.birthPlace}
    />
  ));
  return (
    <div className="flex flex-wrap justify-center items-center">
      {playersCard}
    </div>
  );
}
