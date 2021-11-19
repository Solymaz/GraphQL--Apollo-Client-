/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useParams } from "react-router";
import { useCharacter } from "../hooks/useCharacter";
import "./character.css";

export default function Character() {
  const { id } = useParams();
  const { error, loading, data } = useCharacter(id);

  if (error) return <div>Oops!</div>;
  if (loading) return <div>Loading ...</div>;
  return (
    <div className="character">
      <img src={data.character.image} width={750} height={750} />
      <div className="character-content">
        <h1>{data.character.name}</h1>
        <div className="character-episode">
          {data.character.episode.map((episode) => {
            return (
              <div>
                {episode.name} - <bold>{episode.episode}</bold>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
