import React from 'react'
import HeaderComponent from '../HeaderComponent.jsx/HeaderComponent'
import MenuListComponent from '../MenuListComponent/MenuListComponent'

const DefaultComponent = ({children,background}) => {
  return (
    <div>
      
        <HeaderComponent background={background}/>
        {children}
        
    </div>
  )
}

export default DefaultComponent