import { gql, useQuery } from "@apollo/client";

// Define query to get all characters
const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

export const useCharacters = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  return {
    loading,
    error,
    data,
  };
};
