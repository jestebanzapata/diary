import React from 'react'
import { StyledIconButton } from './IconButton.styles';

function IconButton(props) {
  const {children, handleClick} = props;

  return (
    <StyledIconButton onClick={handleClick}>
      {children}
    </StyledIconButton>
  )
}

export default IconButton
