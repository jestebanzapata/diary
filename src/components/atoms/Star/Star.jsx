import React, { useEffect, useState } from 'react';
import { StyledStar } from './Star.styles'

function Star(props) {

  const [stars, setStars] = useState();
  const { starNumber, size } = props;


  useEffect(() => {
    generateStars();
  }, [])

  const randomNumberInRange = (max) => {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - 0 + 1)) + 0;
  }

  const generateStars = () => {
    let randomStars = `${randomNumberInRange(2000)}px ${randomNumberInRange(2000)}px #FFF`;
    for (let index = 1; index < starNumber; index++) {
      randomStars += `, ${randomNumberInRange(2000)}px ${randomNumberInRange(2000)}px #FFF`;
    }
    setStars(randomStars);
  };

  return (
    <StyledStar size={size} stars={stars}/>
  )
}

export default Star;
