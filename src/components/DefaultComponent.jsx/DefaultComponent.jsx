import React from 'react'
import HeaderComponent from '../HeaderComponent.jsx/HeaderComponent'
import MenuListComponent from '../MenuListComponent/MenuListComponent'

const DefaultComponent = ({children}) => {
  return (
    <div>
      
        <HeaderComponent/>
        {children}
        
    </div>
  )
}

export default DefaultComponent