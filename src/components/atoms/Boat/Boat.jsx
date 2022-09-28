import React from 'react'
import { StyledBoatContainer } from './Boat.styles'

function Boat(props) {
  const {color} = props;
  return (
    <StyledBoatContainer color={color}>
      <div className="pipe"></div>
      <div className='cabin1'>
        <div className='ceil1' >
          <div className='line'></div>
        </div>
        <div className='ceil2'></div>
        <div className='room'>
          <div className='window'></div>
        </div>
      </div>
      {/* <div className='cabin2'>
        <div className='ceil1' >
          <div className='line'></div>
        </div>
        <div className='ceil2'></div>
        <div className='room'>
          <div className='window'></div>
        </div>
      </div> */}
      <div className='undercabin'>
        <div className='under1'></div>
        <div className='under2'>
          <div className='float'>
            <div className='hole'></div>
            <div className='line1'></div>
            <div className='line2'></div>
            <div className='line3'></div>
            <div className='line4'></div>
          </div>
        </div>
      </div>


      <div className='underboat'>
        <div className='underboat1'>
          <div className='floor'></div>
          <div className='underfloor'></div>
        </div>
        <div className='underboat2'>
          <div className='floor'></div>
          <div className='underfloor'>
            <div className='front'></div>
          </div>
        </div>
      </div>
    </StyledBoatContainer>
  )
}

export default Boat
