// the https://rickandmortyapi.com/graphql server doesn't support mutation and this just for practice sake

import React from "react";
import { gql, useMutation } from "@apollo/client";

const CREATE_CHARACTER = gql`
  mutation CreateCharacter($name: String!) {
    createCharacter(record: { name: $name }) {
      record {
        name
      }
    }
  }
`;

export default function Mutation() {
  const [createCharacter, { error, loading, data, called }] = useMutation(
    CREATE_CHARACTER,
    {
      variables: {
        name: "Sol",
      },
    }
  );
  return (
    <div>
      <button onClick={() => createCharacter()}>Create</button>
    </div>
  );
}
