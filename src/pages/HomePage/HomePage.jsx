// // import React from 'react'
// // import { useState } from 'react';
// // import {Collapse, Layout,theme} from 'antd'
// // import {
// //   AppstoreOutlined,
// //   ContainerOutlined,
// //   DesktopOutlined,
// //   MailOutlined,
// //   MenuFoldOutlined,
// //   MenuUnfoldOutlined,
// //   PieChartOutlined,
// // } from '@ant-design/icons';
// // import { Button, Menu ,Flex} from 'antd';
// // import Logo from '../../components/Logo/Logo';
// // import MenuListComponent from '../../components/MenuListComponent/MenuListComponent';
// // import ToggleThemeButton from '../../components/ToogleThemeButton/ToggleThemeButton';
// // import MainContent from '../../components/MainContent/MainContent';
// // import SideContent from '../../components/SideContent/SideContent';
// // const { Header, Footer, Sider, Content } = Layout;


// // const HomePage = () => {
// // const [darkTheme,setDarkTheme]=useState(true)  
// // const [collapsed,setCollapsed]= useState(false)
// // const toggleTheme=()=>{
// //   setDarkTheme(!darkTheme)
// // }

// // const{
// //   token:{colorBgContainer, borderRadiusLG},
// // }=theme.useToken()
// //   return (
// //     <Layout>
// //         <Sider
// //         collapsed={collapsed}
// //         collapsible
// //         trigger={null}
// //         theme={darkTheme? 'light': 'dark'} 
// //         style={{color:'#fff'}}>
// //           <Logo/>
// //           <MenuListComponent darkTheme={darkTheme}/>
// //           <ToggleThemeButton  darkTheme={darkTheme} toogleTheme={toggleTheme}/>
// //           </Sider>

// //           <Layout>
// //             <Header style={{padding:0,background:colorBgContainer}}>
// //                <Button
// //                 style={{marginRight:'1045px'}}
// //                  type='text'
// //                  onClick={()=> setCollapsed(!collapsed)}
// //                  icon={collapsed ?<MenuUnfoldOutlined/> :<MenuFoldOutlined/>}
                 
// //                />
                
        
// //             </Header>
// //             <Content
// //           style={{
// //             margin: '24px 16px',
// //             padding: 24,
// //             minHeight: 280,
// //             background: colorBgContainer,
// //             borderRadius: borderRadiusLG,
// //           }}
// //         >
// //           <Flex gap="large">
// //             <MainContent/>
// //             <SideContent/>


// //           </Flex>
          
// //         </Content>
// //           </Layout>      
// //     </Layout>
    
// //   )
// // }

// // export default HomePage
// import React, { useState } from 'react';
// import { Layout, Button, theme, Flex } from 'antd';
// import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
// import Logo from '../../components/Logo/Logo';
// import MenuListComponent from '../../components/MenuListComponent/MenuListComponent';
// import ToggleThemeButton from '../../components/ToogleThemeButton/ToggleThemeButton';
// import MainContent from '../../components/MainContent/MainContent';
// import SideContent from '../../components/SideContent/SideContent';

// const { Header, Sider, Content } = Layout;

// const HomePage = () => {
//   const [darkTheme, setDarkTheme] = useState(true);
//   const [collapsed, setCollapsed] = useState(false);

//   const toggleTheme = () => {
//     setDarkTheme(!darkTheme);
//   };

//   const { colorBgContainer, borderRadiusLG } = theme.useToken();

//   return (
//     <Layout>
//       <Sider
//         collapsed={collapsed}
//         collapsible
//         trigger={null}
//         theme={darkTheme ? 'light' : 'dark'}
//         style={{ color: '#fff' }}
//       >
//         <Logo />
//         <MenuListComponent darkTheme={darkTheme}  />
//         <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
//       </Sider>

//       <Layout>
//         <Header style={{ padding: 0, background: colorBgContainer }}>
//           <Button
//             style={{ marginRight: '1045px' ,color:'white'}}
//             type='text'
//             onClick={() => setCollapsed(!collapsed)}
//             icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//           />
//         </Header>
//         <Content
//           style={{
//             margin: '24px 16px',
//             padding: 24,
//             minHeight: 280,
//             background: colorBgContainer,
//             borderRadius: borderRadiusLG,
//           }}
//         >
//           <Flex gap="large">
//             <MainContent />
//             <SideContent />
//           </Flex>
//         </Content>
//       </Layout>
//     </Layout>
//   );
// };

// export default HomePage;

import React, { useState } from 'react';
import { Layout, Button, theme, Flex ,Menu} from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import Logo from '../../components/Logo/Logo';
import MenuListComponent from '../../components/MenuListComponent/MenuListComponent';
import ToggleThemeButton from '../../components/ToogleThemeButton/ToggleThemeButton';
import MainContent from '../../components/MainContent/MainContent';
import SideContent from '../../components/SideContent/SideContent';
import DefaultComponent from '../../components/DefaultComponent.jsx/DefaultComponent';

const { Header, Sider, Content } = Layout;

const renderPage = (key) => {
  switch (key) {
    case 'home':
      return <>
            <MainContent />
            <SideContent />
            </>;
    case 'courses':
      return <div>asdasd</div>;
    case 'assignment':
      return <OrderAdmin />;
    case 'schedule':
      return <OrderAdmin />;
    case 'setting':
      return <OrderAdmin />;
    default:
      return <></>;
  }
};
const HomePage = () => {
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

export default HomePage;
