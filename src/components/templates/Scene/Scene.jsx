import LevelButton from 'components/atoms/LevelButton/LevelButton';
import TextAnimator from 'components/molecules/TextAnimator/TextAnimator';
import Toolbar from 'components/molecules/Toolbar/Toolbar';
import React, { useCallback, useEffect, useState } from 'react'
import ReactSound from 'react-sound';
import Boat from '../../atoms/Boat/Boat';
import Dialog from '../../atoms/Dialog/Dialog';
import Star from '../../atoms/Star/Star';
import { StyledSceneContainer } from './Scene.styles';
import backgroundSound from '../../../sound/silent.mp3';
import { TEXT_EVENTS } from 'constants/SceneConfig';

function Scene(props) {
  const { sceneConfig } = props;
  const [sound, setSound] = useState(new Audio(backgroundSound));
  const [classnames, setClassnames] = useState({
    boat: ["boat"],
    boat2: ["boat2 hideBoat"],
    scene: []
  });
  const [sceneProps, setSceneProps] = useState({
    scene: { isNight: false}
  });

  useEffect(() => {
    sound.loop = true;
    sound.play();

    return () => {
      sound.pause();
    };
  }, [])

  const onTextAnimatorEvenHandler = useCallback(
    (textConfig) => {
      console.log("onTextAnimatorEvenHandler ", textConfig);
      if (textConfig.events.includes(TEXT_EVENTS.FIRST_TEXT)){

      }

      if (textConfig.events.includes(TEXT_EVENTS.MOVE_SECOND_BOAT)) {
        console.log("update classnames");
        setClassnames({ ...classnames, boat2: ["boat2", "showBoat"]});
      }

      if (textConfig.events.includes(TEXT_EVENTS.SCENE_DAY)) {
        console.log("update classnames");
        setSceneProps({ ...sceneProps, scene: { isNight: false }  });
      }

      if (textConfig.events.includes(TEXT_EVENTS.SCENE_NIGHT)) {
        console.log("update classnames");
        setSceneProps({ ...sceneProps, scene: { isNight: true } });
      }




    },
    [sound],
  );

  return (
    <StyledSceneContainer {...sceneProps.scene}>
      {/* <LevelButton content={"T1"} levelId={"level1"}
        finished={true}
        disabled={false} /> */}
      {sceneProps.scene.isNight && <>
        <Star size={3} starNumber={100} />
        <Star size={2} starNumber={200} />
        <Star size={1} starNumber={700} />
        </>}
      <div className='sky'>
        <div className="sky1"></div>
        <div className="sky2"></div>
        <div className="sky3"></div>
      </div>
      <div className="sea">
        <div className="wave"></div>
      </div>
      <div className={classnames.boat.join(" ")}>
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

      <div className={classnames.boat2.join(" ")}>
        <div className="clouds">
          <div className="cloud1"></div>
          <div className="cloud2"></div>
          <div className="cloud3"></div>
        </div>
        <Boat color="#c6c5d6" />
        <div className="waterboat">
          <div className="big-wave wave1"></div>
          <div className="small-wave wave2"></div>
          <div className="water"></div>
        </div>
      </div>
      <TextAnimator textArray={sceneConfig.textArray} onEventHandler={onTextAnimatorEvenHandler} manual />
      <Toolbar/>

    </StyledSceneContainer>
  )
}

export default Scene;
