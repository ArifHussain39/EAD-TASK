import React from "react";
import { Layout, Menu, Avatar, Dropdown, Button } from "antd";
import {
  UserOutlined,
  HomeOutlined,
  AppstoreOutlined,
  SettingOutlined,
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
      <Menu.Item key="4" icon={<UserOutlined />}>
        Characters
      </Menu.Item>
    </Link>
  </Menu>
);

export default function Navbar() {
  return (
    <Layout>
      <Header className="header">
        <div className="logo">React & GraphQL</div>
        <Menu theme="dark" mode="horizontal" className="desktop-menu">
          <Link to="/">
            <Menu.Item key="1" icon={<HomeOutlined />}>
              Home
            </Menu.Item>
          </Link>
          <Link to="/characters">
            <Menu.Item key="3" icon={<UserOutlined />}>
              Characters
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
