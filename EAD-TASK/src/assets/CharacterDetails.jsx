import React from "react";
import { Spin, Alert, Card, List, Typography } from "antd";
import { useCharacterDetails } from "./useCharacterDetails";
import { useParams } from "react-router-dom";

const { Title } = Typography;
const { Text } = Typography;

function CharacterDetails() {
  const { id } = useParams();
  const { data, error, loading } = useCharacterDetails(id);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <Spin size="large" tip="Loading characters..." />
        <Text type="secondary" style={{ marginTop: 20 }}>
          Fetching data, please wait...
        </Text>
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Alert
          message="Error"
          description={error.message}
          type="error"
          showIcon
        />
      </div>
    );
  }

  const { character } = data;

  return (
    <div style={{ display: "flex", padding: "20px", marginTop: "80px" }}>
      <div style={{ marginRight: "20px" }}>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt={character.name} src={character.image} />}
        >
          <Card.Meta
            title={character.name}
            description={
              <>
                <Text>
                  Species: {character.species}
                  <br />
                </Text>
                <Text>
                  Status: {character.status}
                  <br />
                </Text>
                <Text>
                  Origin: {character.origin.name}
                  <br />
                </Text>
                <Text>
                  Type: {character.type}
                  <br />
                </Text>
              </>
            }
          />
        </Card>
      </div>
      <div style={{ flex: 2 }}>
        <Title level={3}>Episodes</Title>
        <List
          itemLayout="horizontal"
          dataSource={character.episode}
          renderItem={(episode) => (
            <List.Item>
              <List.Item.Meta
                title={`Episode ${episode.episode}`}
                description={episode.name}
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}

export default CharacterDetails;
