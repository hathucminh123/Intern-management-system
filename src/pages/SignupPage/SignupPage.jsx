import React from 'react'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import styled from 'styled-components'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import InputFormComponent from '../../components/InputFormComponent/InputFormComponent'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'
import  Minh from '../../assets/minh123.jpg'
import  image1 from '../../assets/download.png'
import googleimage from '../../assets/google.png'
import { Image } from 'antd'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import axios from 'axios'

import { useNavigate } from 'react-router-dom';

import {useState} from 'react'
import { useGoogleLogin } from '@react-oauth/google';

const SignupPage = () => {

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


  const handleNavigateSignIn = () => {
    navigate('/sign-in')
  }


  const [isPasswordShow,setIsPasswordShow]=useState(false)
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)
  const[password,setPassword]=useState()
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email,setEmail]=useState()


  const handleOnchangePassword = (value) => {
    setPassword(value)
  }

  const handleOnchangeConfirmPassword = (value) => {
    setConfirmPassword(value)
  }
  const handleOnchangeEmail = (value) => {
    setEmail(value)
  }
  return (
  //   <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', height: '100vh' }}>
      
  //   <div style={{ width: '800px', height: '445px', borderRadius: '6px', background: '#fff',display:'flex' }}>
  //     <div style={{textAlign:'center',marginBottom:'50px'}}>
  //       <a title='intern'  href="/">
  //             <img style={{fontFamily:'inherit'}} src={image1} alt="" />
  //        </a>
  //     </div>

  //     <div style={{marginBottom:'30px',width:'100%',cursor:'pointer'}}>
  //     {/* <GoogleLogin
  //           onSuccess={credentialResponse => {
  //              const  credentialResponseDecode = jwtDecode(credentialResponse.credential)
  //             console.log(credentialResponseDecode);
  //           }}
  //           onError={() => {
  //             console.log('Login Failed');
  //           }} */}
  //     {/* />; */}

  //     <button style={{fontSize:'30px',border:'1px solid #dadce0',color:'#3c4043',backgroundColor:'#fff',fontFamily:'Google Sans,arial,sans-serif',cursor:'pointer',display:'flex',gap:'10px'}}
  //      onClick={() => login()}>
  //       <img src={googleimage} style={{width:'50px',marginTop:'5px'}}   alt="google" />  <span style={{marginTop:'15px'}}> Sign in with Google </span>
  //      </button>;
  //     </div>
  //  <WrapperContainerLeft style={{border:'1px solid rgb(229, 229, 229)',boxShadow:'rgb(229, 229, 229) 0px 0px 5px'}}>
  //  <h1>Xin chào</h1>
  //         <p>Đăng nhập vào tạo tài khoản</p>
  //   <span style={{ display: 'flex',justifyContent: 'center',alignItems: 'center',textAlign: 'center',color:'#111',fontFamily:'inherit',fontSize:'35px',fontWeight:'400',lineHeight:'1.2'}}>
  //   Chào mừng đến với Intern management system</span>
  //   <p style={{fontSize:'20px',color:'#111',fontFamily:'inherit'}}>Đăng nhập và tạo tài khoản</p>

  //   <InputFormComponent placeholder='Username' style={{ marginBottom: '50px',fontSize:'30px',width:'100%',height:'100px' }} value={email} onChang={handleOnchangeEmail}/>
  //   <div style={{ position: 'relative' }}>
  //           <span
  //             onClick={() => setIsPasswordShow(!isPasswordShow)}
  //             style={{
  //               zIndex: 10,
  //               position: 'absolute',
  //               top: '4px',
  //               right: '8px'
  //             }}
  //           >{
  //               isPasswordShow ? (
  //                 <EyeFilled style={{fontSize:'40px',textAlign:'center',marginTop:'25px'}} />
  //               ) : (
  //                 <EyeInvisibleFilled style={{fontSize:'40px',textAlign:'center',marginTop:'25px'}} />
  //               )
  //             }
  //           </span>
  //           <InputFormComponent
  //             placeholder="password"
  //             type={isPasswordShow ? "text" : "password"}
  //             value={password}
  //             onChange={handleOnchangePassword}
  //             style={{ marginBottom: '30px',fontSize:'30px',width:'100%',height:'100px' }}
  //           />
  //         </div>
    
  //   <ButtonComponent
  //     styleButton={{
  //       background: 'rgb(25, 118, 210)',
  //       height: '70px',
  //       width: '50%',
  //       border: 'none',
  //       borderRadius: '4px',
  //       margin: '8px 0 24px',
  //       padding:'8px 16px 6px',
        


  //     }}
  //     size={100}
  //     textbutton={'Đăng nhập'}
  //     styleTextButton={{ color: '#fff', fontSize: '25px', fontWeight: '500',fontFamily:'"Be Vietnam Pro", sans-serif' }}
    
  //   />
  //     <p><WrapperTextLight style={{fontSize:'2rem'}}>Quên mật khẩu?</WrapperTextLight></p>
  //         <p style={{fontSize:'2rem'}}>Chưa có tài khoản? <WrapperTextLight style={{fontSize:'2rem'}} onClick={handleNavigateSignUp}> Tạo tài khoản</WrapperTextLight></p>

  // </WrapperContainerLeft>
  //     <WrapperContainerRight>
  //         <Image src={image1} preview={false} alt="iamge-logo" height="203px" width="203px" />
  //         <h4>Mua sắm tại Gunpla shop</h4>
  //       </WrapperContainerRight>
  //   </div>
  //   </div>
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',background: 'linear-gradient(to bottom right, #ffffff 0%, #ffffff 50%, #ADD8E6 50%, #ADD8E6 100%)', height: '100vh' }}>
  <div style={{ width: '90vh', height: '500px', borderRadius: '6px', background: '#fff', display: 'flex' }}>
    <WrapperContainerLeft>
      <h1>Xin chào</h1>
      <p>Đăng nhập vào tạo tài khoản</p>
      <InputFormComponent style={{ marginBottom: '10px' }} placeholder="abc@gmail.com" value={email} onChange={handleOnchangeEmail} />
      {/* <div style={{ position: 'relative' }}>
        <span
          onClick={() => setIsShowPassword(!isPasswordShow)}
          style={{
            zIndex: 10,
            position: 'absolute',
            top: '4px',
            right: '8px'
          }}
        >{
            isPasswordShow ? (
              <EyeFilled />
            ) : (
              <EyeInvisibleFilled />
            )
          }
        </span>
        <InputFormComponent
          placeholder="password"
          type={isPasswordShow ? "text" : "password"}
          value={password}
          onChange={handleOnchangePassword}
        />
      </div> */}
      <div style={{ position: 'relative',marginBottom:'10px' }}>
           <span
              onClick={() => setIsPasswordShow(!isPasswordShow)}
              style={{
                zIndex: 10,
                position: 'absolute',
                top: '4px',
                right: '8px'
              }}
            >
              {
                isPasswordShow ? (
                  <EyeFilled  />
                ) : (
                  <EyeInvisibleFilled  />
                )
              }
            </span>
            <InputFormComponent
              placeholder="Mật khẩu"
              type={isPasswordShow ? "text" : "password"}
              value={password}
              onChange={handleOnchangePassword}
              // style={{ marginBottom: '30px',fontSize:'30px',width:'100%',height:'100px' }}
            />
          </div>
          <div style={{ position: 'relative' }}>
           <span
              onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
              style={{
                zIndex: 10,
                position: 'absolute',
                top: '4px',
                right: '8px'
              }}
            >
              {
                isShowConfirmPassword ? (
                  <EyeFilled  />
                ) : (
                  <EyeInvisibleFilled  />
                )
              }
            </span>
            <InputFormComponent
              placeholder="Xác nhận mật khẩu"
              type={isShowConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={handleOnchangeConfirmPassword}
              // style={{ marginBottom: '30px',fontSize:'30px',width:'100%',height:'100px' }}
            />
          </div>
      {/* {data?.status === 'ERR' && <span style={{ color: 'red' }}>{data?.message}</span>} */}
      {/* <Loading isLoading={isLoading}> */}
        <ButtonComponent
          // disabled={!email.length || !password.length}
          // onClick={handleSignIn}
          size={40}
          styleButton={{
            background: 'rgb(255, 57, 69)',
            height: '48px',
            width: '100%',
            border: 'none',
            borderRadius: '4px',
            margin: '26px 0 10px'
          }}
          textbutton={'Đăng nhập'}
          styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
        ></ButtonComponent>
      {/* </Loading> */}
      <p>Bạn đã có tài khoản? <WrapperTextLight onClick={handleNavigateSignIn}> Đăng nhập</WrapperTextLight></p>
    </WrapperContainerLeft>
    <WrapperContainerRight>
      {/* <Image src={image1} preview={false} alt="iamge-logo" height="203px" width="203px" /> */}
      <h1 style={{
  fontSize: '3em', // Kích thước chữ
  color: '#333', // Màu chữ
  textAlign: 'center', // Canh lề giữa
  textTransform: 'uppercase', // Chuyển đổi chữ thành chữ in hoa
  fontWeight: 'bold', // Độ đậm của chữ
  letterSpacing: '2px', // Khoảng cách giữa các ký tự
  marginBottom: '20px', // Khoảng cách phía dưới
  textShadow: '2px 2px 4px rgba(0,0,0,0.2)' // Hiệu ứng bóng chữ
}}>
  Intern
</h1>
      <h4>Chào mừng đến với Intern management system</h4>
    
    </WrapperContainerRight>
  </div>
</div >
  )
}

export default SignupPage