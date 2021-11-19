import React, { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";

// query is used when we want to do something on load. If wanna show something after an action is taken such is
// clicking a button then we need useLazyQuery

const GET_CHARACTER_LOACATION = gql`
  query GetCharacterLocations($name: String) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

export default function Search() {
  const [name, setName] = useState("");
  const [getLoactions, { error, loading, data, called }] = useLazyQuery(
    GET_CHARACTER_LOACATION,
    {
      variables: {
        name,
      },
    }
  );

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => getLoactions()}>Search</button>
      {loading && <div>Loading ...</div>}
      {error && <div>Oops!</div>}
      {data && (
        <ul>
          {data.characters.results.map((character) => {
            return <li>{character.location.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
}
