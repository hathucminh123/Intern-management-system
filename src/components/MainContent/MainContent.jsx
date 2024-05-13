import React from 'react'
import {Flex} from 'antd'
import Banner from '../Banner/Banner'

import Card from '../Card/Card'
import MentorList from '../MentorList/MentorList'

const MainContent = () => {
  return (
    <div style={{flex:1}}>
        <Flex vertical gap="2.3rem">
               <Banner/>
               <Card/>
               <MentorList />
        </Flex>
    </div>
  )
}

export default MainContent