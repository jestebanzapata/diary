import React from 'react'
import { connect } from 'react-redux';
import GeneralButton from '../GeneralButton/GeneralButton';
import { StyledContainer } from './RadarInfo.styles';
import { setGameStatus } from '../../../redux/actions/boardActions';
import { gameStatus } from 'constants/types';

function RadarInfo(props) {
  const { result, setGameStatus } = props;
  return (
    <StyledContainer>
      <div className="content">
        <h2>!MUY BIEN!</h2>
        <span>Descubriste un código</span>
        <div className="round">
          {result}
        </div>
      </div>
      <GeneralButton navigateTo={'/levels'} onClick={() => {
        console.log("set status");
        setGameStatus({ status: gameStatus.PLAYING });
      }}>Continuar</GeneralButton>
    </StyledContainer>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    gameState: state.board.gameState,
  }
};

const mapDispatchToProps = {
  setGameStatus
};

export default connect(mapStateToProps, mapDispatchToProps)(RadarInfo);
