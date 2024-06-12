import React from "react";
import { Layout, Menu, Button, Row, Col, Typography, Card } from "antd";

const {  Content, Footer } = Layout;
const { Title, Paragraph } = Typography;
import logo from "./logo.png"

function HomePage() {
  return (
    <Layout>
      <Content style={{ padding: "0 50px", marginTop: 64 }}>
        <div className="site-layout-content">
          <div className="hero-section">
            <img src={logo} alt="Rick and Morty Logo" />
            <Paragraph>
              Discover everything you need to know about the Rick and Morty
              universe. From character details to episode summaries, we have it
              all!
            </Paragraph>
            <Button type="primary" size="large">
              Get Started
            </Button>
          </div>
          <Row gutter={16} style={{ marginTop: "50px" }}>
            <Col span={8}>
              <Card title="Character Details" bordered={false}>
                <Paragraph>
                  Learn about your favorite characters, their backgrounds, and
                  their adventures.
                </Paragraph>
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Episode Guide" bordered={false}>
                <Paragraph>
                  Explore detailed summaries and analyses of each episode in the
                  series.
                </Paragraph>
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Fun Facts" bordered={false}>
                <Paragraph>
                  Discover interesting trivia and behind-the-scenes information
                  about the show.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Rick and Morty Info ©2024 Created by YourName
      </Footer>
    </Layout>
  );
}

export default HomePage;
