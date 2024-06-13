import { gql, useQuery } from "@apollo/client";

const GET_CHARACTER_DETAILS = gql`
  query GetCharacterDetails($id: ID!) {
    character(id: $id) {
      id
      name
      image
      gender
      species
      status
      type
      origin {
        name
      }
      episode {
        name
        episode
      }

    }
  }
`;

export const useCharacterDetails = (id) => {
  const { data, error, loading } = useQuery(GET_CHARACTER_DETAILS, {
    variables: { id },
  });
  return { data, error, loading };
};
