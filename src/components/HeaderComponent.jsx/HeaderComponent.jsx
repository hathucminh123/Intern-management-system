import React from 'react'
import { WrapperHeader,WrapperTextHeader,WrapperHeaderAccout,WrapperTextHeaderSmall } from './style'
import {Col,Popover} from 'antd'
import {
    UserOutlined,
    CaretDownOutlined,
    ShoppingCartOutlined
  } from '@ant-design/icons';
  import { useNavigate } from 'react-router-dom';

const HeaderComponent = () => {
    const navigate = useNavigate()

const handleNavigateLogin = () => {
        navigate('/sign-in')
      }
  return (
    <div  style={{  heiht: '100%', width: '100%', display: 'flex',background: '#2D3748', justifyContent: 'center' }}>
       <WrapperHeader>
       <Col span={4}>
          {/* <WrapperTextHeader style={{color:'white'}} to='/'>Intern management </WrapperTextHeader> */}
          <WrapperTextHeaderSmall style={{color:'white'}}>Chào mừng quay trở lại</WrapperTextHeaderSmall>
          <div><WrapperTextHeaderSmall style={{color:'white'}}>Thúc Minh</WrapperTextHeaderSmall></div>
        </Col>
          

        <Col span={4} offset={16} style={{ display: 'flex', gap: '54px', alignItems: 'center' }}>
        <WrapperHeaderAccout style={{color:'white'}}>
 
        
        <UserOutlined style={{ fontSize: '30px' }} />


        <div onClick={handleNavigateLogin} style={{ cursor: 'pointer' }}>
                  <WrapperTextHeaderSmall style={{color:'white'}}>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
                  <div>
                    <WrapperTextHeaderSmall style={{color:'white'}}>Tài khoản</WrapperTextHeaderSmall>
                    <CaretDownOutlined />
                  </div>
                </div>
        
        </WrapperHeaderAccout>


       </Col>
        </WrapperHeader> 
      
        
    </div>
  )
}

export default HeaderComponent