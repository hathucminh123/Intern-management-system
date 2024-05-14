import React, { useState } from 'react';
import { Layout, Button, theme, Flex, Menu } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import Logo from '../../components/Logo/Logo';
import MenuListComponent from '../../components/MenuListComponent/MenuListComponent';
import ToggleThemeButton from '../../components/ToogleThemeButton/ToggleThemeButton';
import MainContent from '../../components/MainContent/MainContent';
import SideContent from '../../components/SideContent/SideContent';
import DefaultComponent from '../../components/DefaultComponent.jsx/DefaultComponent';
import TaskTable from '../../components/InternTaskTable/InternTaskTable';
import InternDashBoard from '../../components/InternDashboard/InternDashboard';

const InternPage = () => {
    const { Header, Sider, Content } = Layout;
    const [collapsed, setCollapsed] = useState(false);
    const [darkTheme, setDarkTheme] = useState(true);
    const [selectedKey, setSelectedKey] = useState(' ');


    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
    };

    const handleMenuClick = (key) => {
        setSelectedKey(key);
    };
    const { token: { colorBgContainer, borderRadiusLG } } = theme.useToken();

    const renderPage = (key) => {
        switch (key) {
            case 'home':
                return <>
                    <InternDashBoard/>
                </>
            case 'courses':
                return <div>courses</div>;
            case 'assignment':
                return <div>courses</div>;
            case 'schedule':
                return <div>courses</div>;
            case 'setting':
                return <div>courses</div>;
            default:
                return <></>;
        }
    };
    return (
        <Layout>
            <Sider
                collapsed={collapsed}
                collapsible
                trigger={null}
                theme={darkTheme ? 'dark' : 'light'}
                style={{ color: '#fff' }}
            >
                <Logo />
                <MenuListComponent
                    darkTheme={darkTheme}
                    selectedKey={selectedKey}
                    handleMenuClick={handleMenuClick}
                />
                <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
            </Sider>
            <Layout>
                <DefaultComponent background={colorBgContainer} >
                    <Button
                        style={{ marginLeft: '15px', position: 'absolute', top: '20px' }}
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
                    {renderPage(selectedKey)}
                </Content>
            </Layout>
        </Layout>
    )
}

export default InternPage