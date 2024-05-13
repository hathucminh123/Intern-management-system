import React from 'react'
import {BiEdit} from 'react-icons/bi'

const ProfileHeader = () => {
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <h2>thông tin cá nhân</h2>
         <div style={{background:'#dde6ed',padding:'12px',borderRadius:'10px',color:'#969393',display:'flex',alignItems:'center',justifyContent:'center'}}>
           <div style={{fontSize:'20px',trasition:'0.5s ease-in-out'}}> <BiEdit/></div>
         </div>
    </div>
  )
}

export default ProfileHeader