import React from 'react'
import { StyledContainer } from './RadarInfo.styles'

function RadarInfo(props) {
  const {content, result} = props;
  return (
    <StyledContainer>
      <span>{content}</span>
      <span>{result}</span>
    </StyledContainer>
  )
}

export default RadarInfo
