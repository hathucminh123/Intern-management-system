import React from 'react'
import {FireFilled} from '@ant-design/icons'
import { PiStudentBold } from "react-icons/pi";
import { WrapperContainerLeftLogo } from './style'
const Logo = () => {
  return (
    <div style={{display:'flex',justifyContent:'center',textAlign:'center',padding:'10px',color:'#fff'}}>
         <WrapperContainerLeftLogo>

        {/* <FireFilled/> */}
        <PiStudentBold />
     
       
        </WrapperContainerLeftLogo>  

   
    </div>
  )
}

export default Logo