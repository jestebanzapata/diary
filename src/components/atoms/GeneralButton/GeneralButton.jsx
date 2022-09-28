import React from 'react'
import { StyledGeneralButton } from './GeneralButton.styles';
import { useNavigate } from "react-router-dom";

function GeneralButton(props) {
  const { children, navigateTo, onClick } = props;

  const navigate = useNavigate();

  const handleClick = () => {
    if(onClick){
      onClick();
    }
    navigate(navigateTo);
  }
  return (
    <StyledGeneralButton onClick={handleClick}>
      {children}
    </StyledGeneralButton>
  )
}

export default GeneralButton
