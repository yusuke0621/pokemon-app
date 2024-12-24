import React from "react";

const Card = ({ pokemon }) => {
  return (
    <div className="card">
      <div className="cardImg">
        <img src={pokemon.sprites.front_default}></img>
      </div>
      <h3 className="cardName">{pokemon.name}</h3>
      <div className="cardType">
        {pokemon.types.map((type) => {
          return (
            <div>
              <span className="typeName">{type.type.name}</span>
            </div>
          );
        })}
      </div>
      <div className="cardInfo">
        <div className="cardData">
          <p className="title">重さ：{pokemon.weight}</p>
        </div>
        <div className="cardData">
          <p className="title">高さ：{pokemon.height}</p>
        </div>
        <div className="cardData">
          <p className="title">アビリティ{pokemon.abilities[0].ability.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;