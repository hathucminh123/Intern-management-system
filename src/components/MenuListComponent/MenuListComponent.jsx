import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, AppstoreOutlined, AreaChartOutlined, ContactsOutlined, ProjectOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const MENU_KEYS = {
  HOME: 'home',
  COURSES: 'courses',
  ASSIGNMENT: 'assignment',
  SCHEDULE: 'schedule',
  SETTING: 'setting',
};

const MenuListComponent = ({ darkTheme, selectedKey, handleMenuClick }) => {
  return (
    <Menu
      theme={darkTheme ? 'dark' : 'light'}
      mode='inline'
      selectedKeys={[selectedKey]}
      onClick={({ key }) => handleMenuClick(key)}
      style={{
        height: '100vh',
        marginTop: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        fontSize: '1rem',
        position: 'relative',
      }}
    >
      <Menu.Item key={MENU_KEYS.HOME} icon={<HomeOutlined />}>
        Trang chủ
      </Menu.Item>

      <Menu.Item key={MENU_KEYS.COURSES} icon={<AppstoreOutlined />}>
        Các khóa học
      </Menu.Item>

      <Menu.Item key={MENU_KEYS.ASSIGNMENT} icon={<ProjectOutlined />}>
        Assignment
      </Menu.Item>

      <Menu.Item key={MENU_KEYS.SCHEDULE} icon={<AreaChartOutlined />}>
        Lịch trình
      </Menu.Item>

      <Menu.Item key={MENU_KEYS.SETTING} icon={<ContactsOutlined />}>
        Mentor
      </Menu.Item>
    </Menu>
  );
};

export default MenuListComponent;
