import React from 'react'

import mentorimg from '../../assets/minhwap.jpg'
import {WrapperListContainer,WrapperList,WrapperListDetail} from './style'

const Mentors=[
    {
        image: mentorimg,
        name:'Minhht',
        duration:'20 hours lesson',
        cost:'100',

    },
    {
        image: mentorimg,
        name:'Minhht2',
        duration:'20 hours lesson',
        cost:'100',

    },
    {
        image: mentorimg,
        name:'Minhht3',
        duration:'20 hours lesson',
        cost:'100',

    },
    {
        image: mentorimg,
        name:'Minhht4',
        duration:'20 hours lesson',
        cost:'100',

    },
    {
        image: mentorimg,
        name:'Minhht5',
        duration:'20 hours lesson',
        cost:'100',

    },
  

]



const MentorList = () => {
  return (
    <div>
        
        <div>
            <h2>
                Mentor
            </h2>
          
        </div>
        <WrapperListContainer>
           {Mentors.map((mentors)=>(
            <WrapperList key={mentors.name}>
                <WrapperListDetail  >
                <img style={{width:'50px',background:'#dde6ed',borderRadius:'50%'}} src={mentors.image} alt={mentors.name} />
                <h2>{mentors.name}</h2>
                </WrapperListDetail>
                  <span>{mentors.duration}</span>  
                  <span>{mentors.cost}</span> 
                   
                  <span>:</span>  
            </WrapperList>
           ))}
        </WrapperListContainer>
        
     </div>
  )
}

export default MentorList