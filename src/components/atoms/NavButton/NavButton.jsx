import React from 'react'
import { StyledNavButton } from './NavButton.styles';
import { useNavigate } from "react-router-dom";

function NavButton(props) {
  const { children, navigateTo} = props;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(navigateTo);
  }
  return (
    <StyledNavButton onClick={handleClick}>
      {children}
    </StyledNavButton>
  )
}

export default NavButton
