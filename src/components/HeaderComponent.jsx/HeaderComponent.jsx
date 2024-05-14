import React from 'react'
import { WrapperHeader,WrapperTextHeader,WrapperHeaderAccout,WrapperTextHeaderSmall,WrapperContentPopup } from './style'
import {Col,Popover} from 'antd'
import {
    UserOutlined,
    CaretDownOutlined,
    ShoppingCartOutlined
  } from '@ant-design/icons';
  import { useNavigate } from 'react-router-dom';
import ButttonInputSearch from '../ButtonInputSearchComponent/ButtonInputSearch';
import image1 from '../../assets/minhwap.jpg'

import { useState } from 'react';
const HeaderComponent = ({background, isHiddenSearch = false}) => {
  
  const [isOpenPopup, setIsOpenPopup] = useState(false)
    const navigate = useNavigate()

const handleNavigateLogin = () => {
        navigate('/sign-in')
      }
      const handleLogout = async () => {
       navigate('/sign-in')
      }      

      const handleClickNavigate = (type) => {
        if(type === 'profile') {
          navigate('/profile-user')
        }
        
        else {
          handleLogout()
        }
        setIsOpenPopup(false)
      }

      const content = (
        <div>
          <WrapperContentPopup onClick={() => handleClickNavigate('profile')}>Thông tin người dùng</WrapperContentPopup>
        
         
          <WrapperContentPopup onClick={() => handleClickNavigate()}>Đăng xuất</WrapperContentPopup>
        </div>
      );




  return (
    <div  style={{  height: '100%', width: '100%', display: 'flex',background: background, justifyContent: 'center' }}>
       <WrapperHeader style={{ justifyContent: isHiddenSearch && isHiddenSearch ? 'space-between' : 'unset' }}>
       {/* <Col span={5}> */}
          {/* <WrapperTextHeader style={{color:'white'}} to='/'>Intern management </WrapperTextHeader> */}
          {/* <WrapperTextHeaderSmall style={{color:'black', marginRight:'100px'}}>Tranh chủ</WrapperTextHeaderSmall>
          <div><WrapperTextHeaderSmall style={{color:'black'}}>Thúc Minh</WrapperTextHeaderSmall></div>
        </Col> */}
        {!isHiddenSearch && (
          <Col span={6} offset={15}>
            <ButttonInputSearch
              size="large"
              bordered={false}
              textbutton="Tìm kiếm"
              placeholder="nhập task bạn muốn tìm kiếm"
              // onChange={onSearch}
              backgroundColorButton="#5a20c1"
            />
          </Col>
        )}
        <Col span={3} style={{ display: 'flex', gap: '54px', alignItems: 'center' }}>
        <WrapperHeaderAccout style={{color:'black'}}>
    
       <img content={content}  src={image1} alt="avatar" style={{
                  height: '30px',
                  width: '30px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  cursor:'pointer'
                }} />
                

       
        {/* <UserOutlined style={{ fontSize: '30px' }} /> */}
        <>
        <Popover content={content} trigger="click" open={isOpenPopup}>
                    <div style={{ cursor: 'pointer',maxWidth: 100, overflow: 'hidden', textOverflow: 'ellipsis' }} onClick={() => setIsOpenPopup((prev) => !prev)}>Thúc Minh</div>
        </Popover>
        </>

        {/* <div onClick={handleNavigateLogin} style={{ cursor: 'pointer' }}>
                  <WrapperTextHeaderSmall style={{color:'black'}}>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
                  <div>
                    <WrapperTextHeaderSmall style={{color:'black'}}>Tài khoản</WrapperTextHeaderSmall>
                    <CaretDownOutlined />
                  </div>
                </div> */}
        
        </WrapperHeaderAccout>


       </Col>
        </WrapperHeader> 
      
        
    </div>
  )
}

export default HeaderComponent