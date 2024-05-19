import React, { useState } from 'react';
import { Layout, Button, theme, Flex ,Menu} from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import Logo from '../../components/Logo/Logo';
import MenuListMentorComponent from '../../components/MentorComponent/MenuListMentorComponent/MenuListMentorComponent';
import ToggleThemeButton from '../../components/ToogleThemeButton/ToggleThemeButton';
import MainContent from '../../components/MainContent/MainContent';
import SideContent from '../../components/SideContent/SideContent';
import DefaultComponent from '../../components/DefaultComponent.jsx/DefaultComponent';
import DashBoardComponent from '../../components/MentorComponent/DashboardComponent/DashBoardComponent';
import TaskComponent from  '../../components/MentorComponent/TaskComponent/TaskComponent'

// import ChatRoom from '../../components/MentorComponent/ChatRoom/index';
import SideBar from '../../components/MentorComponent/ChatRoom/SideBar';
import ChatWindow from '../../components/MentorComponent/ChatRoom/ChatWindow';

const { Header, Sider, Content } = Layout;

const renderPage = (key) => {
  switch (key) {
    case 'home':
      return <DashBoardComponent/>;
    case 'task-1':
      return <TaskComponent/>;
    case 'chat':
      return <>
      <SideBar />
      <ChatWindow/>
             </>
    case 'schedule':
      return <div>lịch trình</div>;
    case 'setting':
      return <div>cai dat</div>;
    default:
      return <></>;
  }
};
const MentorPage = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState(' ');

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const handleMenuClick = (key) => {
    setSelectedKey(key);
  };

  const { token:{colorBgContainer,borderRadiusLG}} = theme.useToken();

  return (
    <Layout>
      <Sider
        collapsed={collapsed}
        collapsible
        trigger={null}
        theme={darkTheme ? 'dark' : 'light'}
        style={{ color: '#fff' }}
      >
        <Logo/>
        <MenuListMentorComponent
          darkTheme={darkTheme}
          selectedKey={selectedKey}
          
          handleMenuClick={handleMenuClick}
        />
        <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
      </Sider>

      <Layout>
        <DefaultComponent background={colorBgContainer} >
          <Button
            style={{ marginLeft: '15px', position:'absolute', top:'20px' }}
            collapsed={collapsed}
            type='text'
            onClick={() => setCollapsed(!collapsed)}
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          />
        </DefaultComponent>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Flex  gap="large">
          {/* <div>
            <MainContent />
            <SideContent />
          </div>  */}
         { renderPage(selectedKey) }          
         </Flex>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MentorPage;