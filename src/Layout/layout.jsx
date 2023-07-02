import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import { Layout, Menu, Divider, Button } from "antd";
import {
  RocketOutlined,
  AimOutlined,
  RadarChartOutlined,
  AreaChartOutlined
} from "@ant-design/icons";
import { Header } from "../UI/Header";

const { Content, Sider } = Layout;

const links = [
  { label: "Створення ризику", to: "/createRisk", icon: <AimOutlined /> },
  { label: "Виведення даних про ризики", to: "/risks", icon: <RadarChartOutlined /> },
  { label: "Інтегральні кофіцієнти ризиків", to: "/calculatedRisk", icon: <AreaChartOutlined /> },
  { label: "Результати управління ризик-менеджменту", to: "/resultsRiskManagement", icon: <RocketOutlined /> },
];

const AppLayout = () => {
  const [collapsed, onCollapse] = useState(true);

  return (
    <Layout style={{ minHeight: "100vh"}}>
      <Sider  width={400} collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <Divider />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          className="title"
        >
          {links.map(({ label, icon: Icon, to }) => (
            <Menu.Item key={to}>
              <Link to={to}>
                {Icon}
                <span>{!collapsed && label}</span>
              </Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header>
          <Button
            ghost={true}
            type="primary"
            onClick={() => {
              localStorage.removeItem("login");
            }}
          >
            Logout
          </Button>
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
