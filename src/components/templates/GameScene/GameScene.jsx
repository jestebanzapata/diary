import HueContainer from 'components/pages/HueContainer/HueContainer';
import React from 'react'
import { Provider } from 'react-redux';
import store from 'redux/store';
import { StyledGameSceneContainer } from './GameScene.styles'

function GameScene(props) {
  const { board } = props;
  return (
    <Provider store={store}>
      <HueContainer board={board}/>

    </Provider>


  )
}

export default GameScene;
