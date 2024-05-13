import {BiLogoHtml5,BiLogoAndroid,BiBuilding }from 'react-icons/bi'


import React from 'react'
import { WrapperContainer,WrapperCard ,WrapperIcon,WrapperCardTitle} from './style'
const course =[
    {title:'Web Development',
     icon:<BiLogoHtml5/>,
      
    },
    {title:'App Development',
     icon:<BiLogoAndroid/>,
     duration:'2 hours'
      
    },
    {title:'UX/UI',
     icon:<BiBuilding/>,
     duration:'2 hours'      
    },

]

const Card = () => {
  return (
    // <div style={{display:'flex',gap:'20px',alignItems:'center',marginTop:'2rem'}}>
    <WrapperContainer >        
      {course.map((item)=>(
            <WrapperCard key={item.title}>
               <WrapperIcon> {item.icon}</WrapperIcon>
               <WrapperCardTitle>  {item.title}</WrapperCardTitle>
            </WrapperCard>
        ))}
      </WrapperContainer>
    // </div>
  )
}

export default Card