import React from 'react'

// REDUX
import { connect } from 'react-redux';
import { StyledHueContainer } from './HueContainer.style';
import HueBoard from 'components/organisms/HueBoard/HueBoard';



function HueContainer(props) {
  const { board} = props;

  return (
    <StyledHueContainer>
      {
        <HueBoard boardConfig={board}/>
      }
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
