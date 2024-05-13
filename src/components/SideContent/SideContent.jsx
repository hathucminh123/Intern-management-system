import React from 'react'
import {Flex} from 'antd'
import ProfileHeader from '../ProfileHeader/ProfileHeader'
import userImg from '../../assets/minhwap.jpg'
import {WrapperCourses,WrapperUserProfile,WrapperUserDetail,WrapperCoursesIcon } from './style'
import {BiBook}from 'react-icons/bi'


const courses=[
  {
    title:'html',
    duration:'2 hour',
    icon: <BiBook/>
  },
  {
    
    title:'html',
    duration:'2 hour',
    icon: <BiBook/>
  },
  {
    title:'html',
    duration:'2 hour',
    icon: <BiBook/>
  },
  {
    title:'html',
    duration:'2 hour',
    icon: <BiBook/>
  },
]

const SideContent = () => {
  return (
    <div style={{width:300,flex:1}}>

      <ProfileHeader/>
      <WrapperUserProfile>
        <WrapperUserDetail>
          <img style={{width:'150px',background:'#fff',borderRadius:'50%',marginBottom:'10px'}} src={userImg} alt='userimage'/>
          <h3 style={{color:'#526d82'}}>Minh</h3>
          <div>mentor</div>
        </WrapperUserDetail>
  <WrapperCourses >
    {courses.map((courses=>(
      <div style={{background:'#dde6ed',padding:'10px',display:'flex',alignItems:'center',justifyContent:'space-between',borderRadius:'10px'}}>
        <div style={{display:'flex',gap:'20px',alignItems:'center',alignContent:'center'}}>
          <WrapperCoursesIcon >{courses.icon}</WrapperCoursesIcon>
          <div>
            <h5>{courses.title}</h5>
            <span style={{fontSize:'12px'}}>{courses.duration}</span>
          </div>
        
        </div>
        <div style={{fontWeight:'900',fontSize:'1.2rem'}}>:</div>
      </div>
    )))}

  </WrapperCourses>
      </WrapperUserProfile>
    </div>
  )
}

export default SideContent