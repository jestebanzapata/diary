import LevelButton from 'components/atoms/LevelButton/LevelButton';
import Star from 'components/atoms/Star/Star';
import { BOARDS, LOCAL_STORAGE_KEY } from 'constants/types';
import React, { useEffect, useState } from 'react'

// REDUX
import { connect } from 'react-redux';
import { StyledLevelContainer } from './Levels.style';



function Levels(props) {

  const [finishedLevels, setFinishedLevels] = useState({});

  const checkLocalStorageValue = (key) => {
    return localStorage.getItem(key) === 'true';
  }

  useEffect(() => {
    const result = BOARDS.reduce((total, currentValue) => {
      return { ...total, [currentValue.id]: checkLocalStorageValue(`${LOCAL_STORAGE_KEY.LEVEL_FINISHED}${currentValue.id}`) };
    }, {});
    setFinishedLevels(result);
  }, [])

  return (
    <StyledLevelContainer>
      <Star size={3} starNumber={100} />
      <Star size={2} starNumber={200} />
      {BOARDS.map(board => {
        return <LevelButton content={board.title} levelId={board.id}
          finished={finishedLevels[board.id]}
          disabled={board.requiredLevel && !finishedLevels[board.requiredLevel]}/>;
      })}
    </StyledLevelContainer>
  )
}

export default Levels;
