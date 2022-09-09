import React from 'react'
import Boat from '../../atoms/Boat/Boat';
import Dialog from '../../atoms/Dialog/Dialog';
import Star from '../../atoms/Star/Star';
import { StyledSceneContainer } from './Scene.styles'

function Scene() {
  return (
    <StyledSceneContainer>
      <Star size={3} starNumber={100}/>
      <Star size={2} starNumber={200} />
      <Star size={1} starNumber={700} />
      <div className="sea">
        <div className="wave"></div>
      </div>
      <div className="boat">
        <div className="clouds">
          <div className="cloud1"></div>
          <div className="cloud2"></div>
          <div className="cloud3"></div>
        </div>
        <Boat />
        <div className="waterboat">
          <div className="big-wave wave1"></div>
          <div className="small-wave wave2"></div>
          <div className="water"></div>
        </div>
      </div>
    </StyledSceneContainer>
  )
}

export default Scene;
