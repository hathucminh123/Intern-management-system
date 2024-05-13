import React from 'react'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import styled from 'styled-components'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import InputFormComponent from '../../components/InputFormComponent/InputFormComponent'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'
import  image1 from '../../assets/download.png'
import googleimage from '../../assets/google.png'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import axios from 'axios'

import { useNavigate } from 'react-router-dom';

import {useState} from 'react'
import { useGoogleLogin } from '@react-oauth/google';

const SigninPage = () => {

  // const history = useHistory();
  const navigate= useNavigate();
  const login = useGoogleLogin({
    onSuccess: async(response)=>{
      try{
        const res=await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers:{
              Authorization:`Bearer ${response.access_token}`,
            },
          }
        );
        console.log(res)
        navigate('/');
      }catch(err){
        console.log(err)
      }
    },
  });
  const [isPasswordShow,setIsPasswordShow]=useState(false)
  const[password,setPassword]=useState()
  const [email,setEmail]=useState()


  const handleOnchangePassword = (value) => {
    setPassword(value)
  }

  const handleOnchangeEmail = (value) => {
    setEmail(value)
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', height: '100vh',lineHeight:'1.2' }}>
      
    <div style={{ width: '800px', height: '445px', borderRadius: '6px', background: '#fff', }}>
      <div style={{textAlign:'center',marginBottom:'50px'}}>
        <a title='intern'  href="/">
              <img style={{fontFamily:'inherit'}} src={image1} alt="" />
         </a>
      </div>

      <div style={{marginBottom:'30px',width:'100%',cursor:'pointer'}}>
      {/* <GoogleLogin
            onSuccess={credentialResponse => {
               const  credentialResponseDecode = jwtDecode(credentialResponse.credential)
              console.log(credentialResponseDecode);
            }}
            onError={() => {
              console.log('Login Failed');
            }} */}
      {/* />; */}

      <button style={{fontSize:'30px',border:'1px solid #dadce0',color:'#3c4043',backgroundColor:'#fff',fontFamily:'Google Sans,arial,sans-serif',cursor:'pointer',display:'flex',gap:'10px'}}
       onClick={() => login()}>
        <img src={googleimage} style={{width:'50px',marginTop:'5px'}}   alt="google" />  <span style={{marginTop:'15px'}}> Sign in with Google </span>
       </button>;
      </div>
   <WrapperContainerLeft style={{border:'1px solid rgb(229, 229, 229)',boxShadow:'rgb(229, 229, 229) 0px 0px 5px'}}>
    <span style={{ display: 'flex',justifyContent: 'center',alignItems: 'center',textAlign: 'center',color:'#111',fontFamily:'inherit',fontSize:'35px',fontWeight:'400',lineHeight:'1.2'}}>
    Chào mừng đến với Intern management system</span>
    <p style={{fontSize:'20px',color:'#111',fontFamily:'inherit'}}>Đăng nhập và tạo tài khoản</p>

    <InputFormComponent placeholder='Username' style={{ marginBottom: '50px',fontSize:'30px',width:'100%',height:'100px' }} value={email} onChang={handleOnchangeEmail}/>
    <div style={{ position: 'relative' }}>
            <span
              onClick={() => setIsPasswordShow(!isPasswordShow)}
              style={{
                zIndex: 10,
                position: 'absolute',
                top: '4px',
                right: '8px'
              }}
            >{
                isPasswordShow ? (
                  <EyeFilled style={{fontSize:'40px',textAlign:'center',marginTop:'25px'}} />
                ) : (
                  <EyeInvisibleFilled style={{fontSize:'40px',textAlign:'center',marginTop:'25px'}} />
                )
              }
            </span>
            <InputFormComponent
              placeholder="password"
              type={isPasswordShow ? "text" : "password"}
              value={password}
              onChange={handleOnchangePassword}
              style={{ marginBottom: '30px',fontSize:'30px',width:'100%',height:'100px' }}
            />
          </div>
    
    <ButtonComponent
      styleButton={{
        background: 'rgb(25, 118, 210)',
        height: '70px',
        width: '50%',
        border: 'none',
        borderRadius: '4px',
        margin: '8px 0 24px',
        padding:'8px 16px 6px',
        


      }}
      size={100}
      textbutton={'Đăng nhập'}
      styleTextButton={{ color: '#fff', fontSize: '25px', fontWeight: '500',fontFamily:'"Be Vietnam Pro", sans-serif' }}
    
    />

  </WrapperContainerLeft>
    </div>
    </div>
  )
}

export default SigninPage