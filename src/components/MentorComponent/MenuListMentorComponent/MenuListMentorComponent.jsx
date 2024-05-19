import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, AppstoreOutlined, AreaChartOutlined, ContactsOutlined, ProjectOutlined,WechatWorkOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const MENU_KEYS = {
  HOME: 'home',
  TASK: 'task',
  CHAT: 'chat',
  SCHEDULE: 'schedule',
  SETTING: 'setting',
};

const MenuListMentorComponent = ({ darkTheme, selectedKey, handleMenuClick }) => {
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

      <SubMenu key={MENU_KEYS.TASK} icon={<AppstoreOutlined />} title="Các khóa học Tasks">
        <Menu.Item key={`${MENU_KEYS.TASK}-1`}> Tạo Task </Menu.Item>
        <Menu.Item key={`${MENU_KEYS.TASK}-2`}> Task hoàn thành </Menu.Item>
        {/* <Menu.Item key={`${MENU_KEYS.TASK}-3`}> Task đang thực hiện </Menu.Item> */}
      </SubMenu>

      <Menu.Item key={MENU_KEYS.CHAT} icon={<WechatWorkOutlined />}>
        Chat
      </Menu.Item>

      <Menu.Item key={MENU_KEYS.SCHEDULE} icon={<AreaChartOutlined />}>
        Lịch trình
      </Menu.Item>

      <Menu.Item key={MENU_KEYS.SETTING} icon={<ContactsOutlined />}>
        Cài đặt
      </Menu.Item>
    </Menu>
  );
};

export default MenuListMentorComponent;
