import React, { useState } from "react";
import { Input, Button, Card, Spin, Alert, Collapse } from "antd";
import { gql, useLazyQuery } from "@apollo/client";

const { Panel } = Collapse;

const GET_CHARACTER_LOCATIONS = gql`
  query GetCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
          dimension
          residents {
            name
          }
        }
      }
    }
  }
`;

function Search() {
  const [name, setName] = useState("");

  const [getLocations, { loading, error, data, called }] = useLazyQuery(
    GET_CHARACTER_LOCATIONS,
    {
      variables: { name },
    }
  );

  return (
    <div style={{ marginTop: "80px", padding: "0 20px" }}>
      {/* Input Box and Search Button */}

      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Search Character Locations
      </h1>
      <div
        className="input"
        style={{
          justifyContent: "center",
          marginBottom: "20px",
          display: "flex",
        }}
      >
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter character name"
          style={{ width: "300px", marginRight: "10px" }}
        />
        <Button type="primary" onClick={() => getLocations()}>
          Search
        </Button>
      </div>

      <div className="result">
        {/* Output Result */}
        {called && loading && (
          <Spin size="large" style={{ marginTop: "20px" }} />
        )}
        {called && error && (
          <Alert
            message="Error"
            description={error.message}
            type="error"
            showIcon
            style={{ marginTop: "20px" }}
          />
        )}
        {called && !loading && !error && data && (
          <div style={{ marginTop: "20px" }}>
            {data.characters.results.map((character, index) => (
              <Card
                key={index}
                title="Location"
                hoverable
                style={{ marginBottom: "20px" }}
              >
                <p>
                  <strong>Name:</strong> {character.location.name}
                </p>
                <p>
                  <strong>Dimension:</strong> {character.location.dimension}
                </p>
                <Collapse>
                  <Panel header="Residents" key="1">
                    <ul>
                      {character.location.residents.map((resident, index) => (
                        <li key={index}>{resident.name}</li>
                      ))}
                    </ul>
                  </Panel>
                </Collapse>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
