import { Button } from 'antd'
import React from 'react'

const ButtonComponent = ({ size, styleButton, styleTextButton, textbutton, disabled, ...rests }) => {
  return (
    <div style={{display:'flex',textAlign:'center',justifyContent:'center'}}>
    <Button
      style={{
        ...styleButton,
        background: disabled ? '#ccc' : styleButton.background
      }}
      size={size}
      {...rests}
    >
      <span style={styleTextButton}>{textbutton}</span>
    </Button>
    </div>
  )
}

export default ButtonComponent