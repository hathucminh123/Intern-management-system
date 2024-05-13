import React from 'react';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';
import { Button } from 'antd';
import { ToggleThemeButtons } from './style';

const ToggleThemeButton = ({ darkTheme, toggleTheme }) => {
  return (
    <ToggleThemeButtons>
      <Button onClick={toggleTheme}>
        {darkTheme ? <HiOutlineSun /> : <HiOutlineMoon />}
      </Button>
    </ToggleThemeButtons>
  );
};

export default ToggleThemeButton;
