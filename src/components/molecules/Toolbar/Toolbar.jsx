import IconButton from 'components/atoms/IconButton/IconButton';
import React, { useEffect, useState } from 'react';
import { StyledToolbar } from './Toolbar.styles';
import { Home } from '@styled-icons/boxicons-regular';
import { Settings2Outline } from '@styled-icons/evaicons-outline';
import { useNavigate } from 'react-router-dom';

function Toolbar(props) {

  const navigate = useNavigate();

  const goToHome = () => {
    navigate(`/`);
  }

  return (
    <StyledToolbar>
      <IconButton handleClick={goToHome}>
        <Home/>
      </IconButton>

      <IconButton>
        <Settings2Outline />
      </IconButton>
    </StyledToolbar>
  )
}

export default Toolbar;
