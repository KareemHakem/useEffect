import React, { useEffect, useState } from "react";

import Character from "./components/Character";

import { findRandomVillain } from "./services/VillainService";

function CharacterList() {
  const [char, setChar] = useState();

  // using useEffect to make sure component is Ready
  useEffect(() => {
    findRandomVillain()
      .then((res) => setChar(res)) // handle promising
      .catch((err) => console.log(err));
  }, []);

  if (!char) return <div>loading</div>;
  
  return (
    <section className="characterList">
      <Character
        key={char.id}
        images={char.images.md}
        name={char.name}
        powerstats={char.powerstats}
      />
    </section>
  );
}

export default CharacterList;
