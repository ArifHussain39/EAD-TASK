import React, { useState } from "react";
import { Layout, Menu, Dropdown, Button } from "antd";
import {
  UserOutlined,
  HomeOutlined,
  SearchOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import "../App.css";
import { Link } from "react-router-dom";
const { Header } = Layout;

const menu = (
  <Menu>
    <Link to="/">
      <Menu.Item key="1" icon={<HomeOutlined />}>
        Home
      </Menu.Item>
    </Link>
    <Link to="/characters">
      <Menu.Item key="2" icon={<UserOutlined />}>
        Characters
      </Menu.Item>
    </Link>
    <Link to="/search">
      <Menu.Item key="3" icon={<SearchOutlined />}>
        Search
      </Menu.Item>
    </Link>
  </Menu>
);

export default function Navbar() {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleClick = () => {
    setButtonClicked(true);
  };

  return (
    <Layout>
      <Header className="header">
        <div className="logo">
          <Link to="/">React & GraphQL</Link>
        </div>
        <Menu theme="dark" mode="horizontal" className="desktop-menu">
          <Link to="/">
            <Menu.Item
              key="1"
              icon={<HomeOutlined />}
              onClick={handleClick}
              className={buttonClicked ? "clicked" : ""}
            >
              Home
            </Menu.Item>
          </Link>
          <Link to="/characters">
            <Menu.Item
              key="2"
              icon={<UserOutlined />}
              onClick={handleClick}
              className={buttonClicked ? "clicked" : ""}
            >
              Characters
            </Menu.Item>
          </Link>
          <Link to="/search">
            <Menu.Item
              key="3"
              icon={<SearchOutlined />}
              onClick={handleClick}
              className={buttonClicked ? "clicked" : ""}
            >
              Search
            </Menu.Item>
          </Link>
        </Menu>
        <div className="mobile-menu">
          <Dropdown overlay={menu} trigger={["click"]}>
            <Button icon={<MenuOutlined />} />
          </Dropdown>
        </div>
      </Header>
    </Layout>
  );
}
