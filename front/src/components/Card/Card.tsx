import "./Card.css";
import React from "react";

interface cardProps {
  name: string;
  url: string;
}

const Card: React.FC<cardProps> = ({ name, url }) => {
  const capitalizeWords = (text: string) => {
    const words = text.split(" ");
    const capitalizedWords = words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return capitalizedWords;
  };

  const addToFavorite = (pokemonId: number) => {
    const userId = 1;
    fetch(
      `${process.env.REACT_APP_API_URL}/user/${userId}/favorite/${pokemonId}`,
      { method: "POST" }
    )
      .then((response) => response.json())
      .then((response) => alert(response.msg));
  };

  const getPokemonIdFromUrl = (url: string): number => {
    const urlWithoutLastCharacter = url.slice(0, url.length - 1);
    const lastSlashIndex = urlWithoutLastCharacter.lastIndexOf("/");
    return Number(urlWithoutLastCharacter.slice(lastSlashIndex + 1));
  };

  return (
    <div id="card">
      <div id="header">{capitalizeWords(name)}</div>
      <div id="content">
        Para tener más información de {capitalizeWords(name)} haga click{" "}
        <a href={url} target="_blank" rel="noopener noreferrer">
          aquí
        </a>
      </div>
      <div id="footer">
        <button onClick={() => addToFavorite(getPokemonIdFromUrl(url))}>
          Añadir a favorito
        </button>
      </div>
    </div>
  );
};

export default Card;
