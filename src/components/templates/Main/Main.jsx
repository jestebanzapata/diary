import GeneralButton from 'components/atoms/GeneralButton/GeneralButton';
import React from 'react'
import { StyledMainContainer } from './Main.styles';

function Main() {

  return (
    <StyledMainContainer>
      <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
      </div>

      <div className='buttonContainer'>
        <GeneralButton navigateTo={'/letter'}>Para mi amor 💝</GeneralButton>
        <GeneralButton navigateTo={'/levels'}>Descubre el código</GeneralButton>
      </div>

    </StyledMainContainer>
  )
}

export default Main;
