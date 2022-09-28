import React from 'react'

// REDUX
import { connect } from 'react-redux';
import { StyledHueContainer } from './HueContainer.style';
import HueBoard from 'components/organisms/HueBoard/HueBoard';
import Toolbar from 'components/molecules/Toolbar/Toolbar';



function HueContainer(props) {
  const { board} = props;

  return (
    <StyledHueContainer>
      <HueBoard boardConfig={board}/>
      <Toolbar />
      <div className='mountain1'></div>
      <div className='mountain21'></div>
      <div className='mountain22'></div>
      <div className="floor"></div>
    </StyledHueContainer>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    gameState: state.board.gameState,
    loggedUser: state.board.loggedUser
  }
};

const mapDispatchToProps = {
  // setShipDragged,
  // setBoardInitialState
};

export default connect(mapStateToProps, mapDispatchToProps)(HueContainer);
