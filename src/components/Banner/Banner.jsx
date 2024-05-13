import React from 'react'

import {Card,Flex, Typography} from 'antd'

const Banner = () => {
  return (
    <Card style={{height:260,padding:'20px'}}>
        <Flex vertical gap="30px"> 
              <Flex vertical align='flex-start'>
                  <Typography.Title   level={2} strong>
                    
                        Xin chào Minh
                  </Typography.Title>    
                  <Typography.Text type='secondary' strong>
                      asdasdasdasdasdasdasdasdasdasd
                  </Typography.Text>             

              </Flex>


        </Flex>
          </Card>
  )
}

export default Banner