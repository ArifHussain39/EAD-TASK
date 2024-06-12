import React from "react";
import { Card, List, Spin, Alert } from "antd";
import { useCharacterDetails } from "./useCharacterDetails";
import { useParams } from "react-router-dom";

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
        }}
      >
        <Spin tip="Loading character details..." />
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

  const { name, image, episode, gender } = data.character;

  return (
    <div
      className="CharacterDetails"
      style={{ padding: "20px", display: "flex", justifyContent: "center" }}
    >
      <Card
        hoverable
        style={{ width: 300 }}
        cover={<img alt={name} src={image} />}
      >
        <Card.Meta title={name} />
        <p>Gender: {gender}</p>

        <List
          header={<div>Episodes</div>}
          bordered
          dataSource={episode}
          renderItem={(item) => <List.Item>{item.name}</List.Item>}
          style={{ marginTop: "20px" }}
        />
      </Card>
    </div>
  );
}

export default CharacterDetails;
