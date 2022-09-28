import IconButton from 'components/atoms/IconButton/IconButton';
import React, { useEffect, useState } from 'react';

import { StyledText, StyledTextAnimator } from './TextAnimator.styles'
import { SkipForward, SkipBack } from 'styled-icons/feather';
import { TEXT_TYPE } from 'constants/SceneConfig';

function TextAnimator(props) {

  const { textArray, onEventHandler, manual } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState(textArray[0]);

  useEffect(() => {
    console.log("textArray[currentIndex] => ", textArray[currentIndex].type === TEXT_TYPE.TITLE);
    setCurrentText(textArray[currentIndex]);
    if (onEventHandler && textArray[currentIndex] != null && textArray[currentIndex].events.length > 0){
      onEventHandler(textArray[currentIndex]);
    }
  }, [currentIndex, textArray, onEventHandler])

  useEffect(() => {
    if(!manual){
      const timeoutId = setTimeout(() => {
        setCurrentIndex(previous => previous === textArray.length - 1 ? 0 : previous + 1);
      }, currentText.duration);

      return () => {
        clearTimeout(timeoutId);
      }
    }
  }, [currentText, textArray.length, manual]);

  const forward = () => {
    setCurrentIndex(previous => previous === textArray.length - 1 ? 0 : previous + 1);
  }

  const back = () => {
    setCurrentIndex(previous => previous === 0 ? 0 : previous - 1);
  }

  const isTitle = (currentText.type === 'TITLE');
  console.log("isTitle => ", isTitle);
  return (
    <StyledTextAnimator>
      {manual && <IconButton handleClick={back}>
        <SkipBack />
      </IconButton>}
      <StyledText isTitle={isTitle}>
        {currentText.text}{!!(currentText.type === TEXT_TYPE.TITLE)}
      </StyledText>
      {manual && <IconButton handleClick={forward}>
        <SkipForward />
      </IconButton>}
    </StyledTextAnimator>
  )
}

export default TextAnimator;
