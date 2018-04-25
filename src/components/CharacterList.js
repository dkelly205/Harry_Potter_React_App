import React from 'react'
import Character from './Character';

const CharacterList = (props) => {
  if (props.characters == null || props.characters.length === 0) {
    return <p>Loading...</p>;
  }
  return(
    <div>
      {props.characters.map((character, index) => {
        return(
          <Character
            key={index}
            name={character.name}
            house={character.house}
            ancestry={character.ancestry}
            image={character.image}

          />

        )
      })}
    </div>
  )

}

export default CharacterList;
