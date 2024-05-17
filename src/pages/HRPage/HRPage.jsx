import React, { useState } from "react";
import { Layout, Button, theme, Flex, Menu } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import Logo from "../../components/Logo/Logo";
import MenuListInternCoordinatorComponent from "../../components/MenuListInternCoordinatorComponent/MenuListInternCoordinatorComponent";
import ToggleThemeButton from "../../components/ToogleThemeButton/ToggleThemeButton";
import MainContent from "../../components/MainContent/MainContent";
import SideContent from "../../components/SideContent/SideContent";
import DefaultComponent from "../../components/DefaultComponent.jsx/DefaultComponent";
import SetUpTraning from "../../components/SetUpTrainingProgramComponent/SetUpTraning";
import EducationalResource from "../../components/EducationalResource/EducationalResource";
import Campaigns from "../../components/CampaignsHRPageComponent/Campaigns";
import CampaignDescription from "../../components/CampaignsHRPageComponent/CampaignDescription";
const { Header, Sider, Content } = Layout;

const renderPage = (key) => {
  switch (key) {
    case "home":
      return (
        <>
          <MainContent />
          <SideContent />
        </>
      );
    case "courses":
      return (
        <div className="w-full">
          <Campaigns />
        </div>
      );
    case "assignment":
      return <CampaignDescription />;
    case "schedule":
      return <OrderAdmin />;
    case "setting":
      return <OrderAdmin />;
    default:
      return <></>;
  }
};
const HRPage = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState(" ");

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const handleMenuClick = (key) => {
    setSelectedKey(key);
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        collapsed={collapsed}
        collapsible
        trigger={null}
        theme={darkTheme ? "dark" : "light"}
        style={{ color: "#fff" }}
      >
        <Logo />
        <MenuListInternCoordinatorComponent
          darkTheme={darkTheme}
          selectedKey={selectedKey}
          handleMenuClick={handleMenuClick}
        />
        <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
      </Sider>

      <Layout>
        <DefaultComponent background={colorBgContainer}>
          <Button
            style={{ marginLeft: "15px", position: "absolute", top: "20px" }}
            collapsed={collapsed}
            type="text"
            onClick={() => setCollapsed(!collapsed)}
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          />
        </DefaultComponent>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Flex gap="large">
            {/* <div>
            <MainContent />
            <SideContent />
          </div>  */}
            {renderPage(selectedKey)}
          </Flex>
        </Content>
      </Layout>
    </Layout>
  );
};

export default HRPage;
