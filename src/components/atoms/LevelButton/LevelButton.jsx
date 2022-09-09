import React from 'react'
import { StyledLevelButton } from './LevelButton.styles';
import { useNavigate } from "react-router-dom";

function LevelButton(props) {
  const {content, levelId, finished, disabled} = props;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/game/${levelId}`);
  }
  return (
    <StyledLevelButton onClick={handleClick} finished={finished} disabled={disabled}>
      <span>{content}</span>
    </StyledLevelButton>
  )
}

export default LevelButton
