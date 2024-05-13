// import React, { useState } from 'react';
// import { Menu } from 'antd';
// import { HomeOutlined, AppstoreOutlined, AreaChartOutlined, ContactsOutlined, ProjectOutlined } from '@ant-design/icons';
// import { Link } from "react-router-dom";
// import HomePage from '../../pages/HomePage/HomePage';

// const { SubMenu } = Menu;

// const MenuListComponent = ({ darkTheme }) => {
//   const [selectedKey, setSelectedKey] = useState(' ');
//   const renderPage = (key) => {
//     switch (key) {
//       case 'home':
//         return (
//           <div><h1>asdasdasdasdasd</h1></div>
//         )
//       case 'courses':
//         return (
//           <div>asdasd</div>
//         )
//       case 'assignment':
//         return (
//           <OrderAdmin />
//         )
//       case 'schedule':
//         return (
//           <OrderAdmin />
//         )
//       case 'setting':
//         return (
//           <OrderAdmin />
//         )  
//       default:
//         return <></>
//     }
//   }

//   const handleMenuClick = (e) => {
//     setSelectedKey(e.key);
//     console.log('click',e.key)
//   };
//  console.log(selectedKey)
//   const onOpenChange =(key)=>{
//     console.log(key)
//   }

//   return (
//     <div style={{display:'flex'}}>
//     <Menu
//       theme={darkTheme ? 'dark' : 'light'}
//       mode='inline'
//       onOpenChange={onOpenChange}
//       selectedKeys={[selectedKey]
        
//       }
//       onClick={handleMenuClick}
//       style={{ height: '88vh', marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '15px', fontSize: '1rem', position: 'relative' }}
//     >
//       <Menu.Item  key='home' la icon={<HomeOutlined />}>
//         {/* <Link to='/'>Trang chủ</Link> */}
//         Trang chủ
//       </Menu.Item>

//       <Menu.Item key='courses' icon={<AppstoreOutlined />}>
//         {/* <Link to='/courses'>Các khóa học của tôi</Link> */}
//         các khóa học
//       </Menu.Item>

//       <Menu.Item key='assignment' icon={<ProjectOutlined />}>
//         {/* <Link to='/assignment'>Project/assignment</Link> */}
//         assignment
//       </Menu.Item>

//       <Menu.Item key='schedule' icon={<AreaChartOutlined />}>
//         {/* <Link to='/schedule'>Lịch trình</Link> */}
//         lich trình
//       </Menu.Item>

//       <Menu.Item key='setting' icon={<ContactsOutlined />}>
//         {/* <Link to='/contact'>Liên hệ mentor</Link> */}
//         mentor
//       </Menu.Item>
//     </Menu>
//     <div style={{flex:1}}>
//       {renderPage(selectedKey)}
//     </div>
//     </div>

//   );
// };

// export default MenuListComponent;
import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, AppstoreOutlined, AreaChartOutlined, ContactsOutlined, ProjectOutlined } from '@ant-design/icons';
import HomePage from '../../pages/HomePage/HomePage';

const { SubMenu } = Menu;

const MenuListComponent = ({ darkTheme, selectedKey, handleMenuClick }) => {
  const renderPage = (key) => {
    switch (key) {
      case 'home':
        return <HomePage/>;
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

  return (
 
      <Menu
        theme={darkTheme ? 'dark' : 'light'}
        mode='inline'
        selectedKeys={[selectedKey]}
        onClick={({ key }) => handleMenuClick(key)}
        style={{
          height: '88vh',
          marginTop: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          fontSize: '1rem',
          position: 'relative',
        }}
      >
        <Menu.Item key='home' icon={<HomeOutlined />}>
          Trang chủ
        </Menu.Item>

        <Menu.Item key='courses' icon={<AppstoreOutlined />}>
          Các khóa học
        </Menu.Item>

        <Menu.Item key='assignment' icon={<ProjectOutlined />}>
          Assignment
        </Menu.Item>

        <Menu.Item key='schedule' icon={<AreaChartOutlined />}>
          Lịch trình
        </Menu.Item>

        <Menu.Item key='setting' icon={<ContactsOutlined />}>
          Mentor
        </Menu.Item>
      </Menu>
      // <div style={{ flex: 1 }}>{renderPage(selectedKey)}</div>
   
  );
};

export default MenuListComponent;
