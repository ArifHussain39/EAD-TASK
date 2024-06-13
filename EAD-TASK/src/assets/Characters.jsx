import React from "react";
import { Card, Row, Col, Spin, Alert, Typography } from "antd";
import { useCharacters } from "./useCharacters";
import { Link } from "react-router-dom";
const { Meta } = Card;
const { Text } = Typography;

function Characters() {
  // Get Characters data from custom hook
  const { data, error, loading } = useCharacters();

  // If data is loading, display loading message
  if (loading)
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

  // If there is an error, display error message
  if (error)
    return (
      <div style={{ marginTop: "80px" }}>
        <Alert
          message="Error"
          description={error.message}
          type="error"
          showIcon
        />
      </div>
    );

  return (
    <div>
      {/*Render all characters from using  material UI  */}

      <div style={{ marginTop: "80px" }}>
        <Row gutter={[16, 16]}>
          {data.characters.results.map((character) => (
            <Col xs={24} sm={12} md={8} lg={4} key={character.id}>
              <Link to={`/${character.id}`}>
                <Card
                  hoverable
                  cover={<img alt={character.name} src={character.image} />}
                >
                  <Meta title={character.name} />
                  <button
                    style={{
                      marginTop: "10px",
                      color: "#fff",
                      border: "none",
                      padding: "8px 16px",
                      borderRadius: "4px",
                      

                    }}
                  >
                    <Link to={`/${character.id}`}>View Details</Link>
                  </button>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Characters;
