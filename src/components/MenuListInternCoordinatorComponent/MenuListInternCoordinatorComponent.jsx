import React from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  AreaChartOutlined,
  ContactsOutlined,
  ProjectOutlined,
} from "@ant-design/icons";
import HomePage from "../../pages/HomePage/HomePage";
import SetUpTraning from "../SetUpTrainingProgramComponent/SetUpTraning";
const { SubMenu } = Menu;

const MenuListInternCoordinatorComponent = ({
  darkTheme,
  selectedKey,
  handleMenuClick,
}) => {
  return (
    <Menu
      theme={darkTheme ? "dark" : "light"}
      mode="inline"
      selectedKeys={[selectedKey]}
      onClick={({ key }) => handleMenuClick(key)}
      style={{
        height: "100vh",
        marginTop: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        fontSize: "1rem",
        position: "relative",
      }}
    >
      <Menu.Item key="home" icon={<HomeOutlined />}>
        Trang chủ
      </Menu.Item>

      <Menu.Item key="courses" icon={<AppstoreOutlined />}>
        Quản lý đào tạo
      </Menu.Item>

      <Menu.Item key="assignment" icon={<ProjectOutlined />}>
        Tài nguyên giáo dục
      </Menu.Item>

      <Menu.Item key="schedule" icon={<AreaChartOutlined />}>
        Lịch trình
      </Menu.Item>

      <Menu.Item key="setting" icon={<ContactsOutlined />}>
        Mentor
      </Menu.Item>
    </Menu>
    // <div style={{ flex: 1 }}>{renderPage(selectedKey)}</div>
  );
};

export default MenuListInternCoordinatorComponent;
