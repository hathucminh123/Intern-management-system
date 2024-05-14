import React from 'react';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';
import { Button } from 'antd';
import { ToggleThemeButtons } from './style';

const ToggleThemeButton = ({ darkTheme, toggleTheme }) => {
  return (
    <ToggleThemeButtons style={{position:'absolute',bottom:'30px',left:'20px',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1rem'}}>
      <Button onClick={toggleTheme}>
        {darkTheme ? <HiOutlineSun /> : <HiOutlineMoon />}
      </Button>
    </ToggleThemeButtons>
  );
};

export default ToggleThemeButton;
