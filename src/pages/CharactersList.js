/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useCharacters } from "../hooks/useCharacters";
import { Link } from "react-router-dom";

import "./characterList.css";

export default function CharactersList() {
  const { error, loading, data } = useCharacters();
  if (loading) return <div>Loading ...</div>;
  if (error) return <div>Oops!</div>;

  return (
    <div className="CharacterList">
      {data.characters.results.map((character) => {
        return (
          <Link to={character.id}>
            <img src={character.image} />
            <h2>{character.name}</h2>
          </Link>
        );
      })}
    </div>
  );
}
