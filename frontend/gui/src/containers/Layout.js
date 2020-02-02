import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const CustomLayout = props => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="1">
            <Link to="/">Clientes</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/invoice">Facturar</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        {/* <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>
            <Link to="/"> Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/clients"> List </Link>
          </Breadcrumb.Item>
        </Breadcrumb> */}
        <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
          {props.children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Desing by Andres Benitez ©2020 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default CustomLayout;
