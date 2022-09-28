import styled, { css } from 'styled-components';

export const StyledSceneContainer = styled.div(
  ({isNight}) =>
    css`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${isNight ? '#293841' : '#81d2f3'};
  overflow: hidden;

  transition: background-color 2s ease-out;

  .clouds {
    position: absolute;
    bottom: 1vw;
    left: 5vw;
    opacity: 0.7;
    animation: cloud-move 6s ease-in-out infinite;

    @keyframes cloud-move {
      0% {
        opacity: 0;
      }
      30% {
        opacity: 0.5;
      }
      60% {
        transform:  translateX(-5vw) translateY(-3vw) scale(0.7);
        opacity: 0;
      }
      100% {
        opacity: 0;
      }
    }

    .cloud1 {
      position: absolute;
      top: -1vw;
      left: 3vw;
      background-color: rgba(255,255,255, 1);
      width: 8vw;
      height: 4vw;
      border-radius: 8vw 8vw 0 0;
    }
    .cloud2 {
      position: absolute;
      background-color: rgba(255,255,255,1);
      width: 5vw;
      height: 3vw;
      border-radius: 5vw 5vw 0 0;
    }
    .cloud3 {
      position: absolute;
      top: 1vw;
      left: -5vw;
      background-color: rgba(255,255,255,1);
      width: 4vw;
      height: 2vw;
      border-radius: 3vw 3vw 0 0;
    }
  }

  .sky {
    position: absolute;
    height: 57vw;

    .sky1 {
      position: absolute;
      bottom: -27vw;
      left: -9vw;
      background-color: rgba(255,255,255, 1);
      width: 44vw;
      height: 23vw;
      border-radius: 28vw 28vw 0 0;
    }
    .sky2 {
      position: absolute;
      background-color: rgba(255,255,255,1);
      bottom: -27vw;
      left: -55vw;
      width: 59vw;
      height: 37vw;
      border-radius: 35vw 35vw 0 0;
    }

  }

  .sea {
    position: absolute;
    bottom: -15vw;
    width: 100vw;
    height: 57vw;
    background-color: ${isNight ? '#254850' : '#4F7396'};
    transition: background-color 2s ease-out;
    @media (min-width: 590px) {
      height: 24vw;
    }
  }

  .boat {
    position: absolute;
    bottom: 35vw;
    left: 25vw;
    transform: scale(0.43);

    @media (min-width: 590px) {
     transform: scale(0.3);
     bottom: 15vw;
     left: 28vw;
    }
  }

.hideBoat {
  left: -40vw;
}

.showBoat {
  left: 40vw;
  @media (min-width: 590px) {
    left: 22vw;
  }
}

.boat2 {
  position: absolute;
  bottom: 48vw;
  transform: scale(0.36);


  transition: left 2s ease-out;

  @media (min-width: 590px) {
   transform: scale(0.25);
   bottom: 10vw;
  }
}


.waterboat {
  position: absolute;
  top: 25vw;
  left: 1vw;
  width: 56vw;
  height: 3vw;
  background-color: #FFFFFF;
  z-index: 2;
  border-radius: 1vw;

  .big-wave {
    animation: wave-diffuse 5s ease-in-out infinite;
  }
  .small-wave {
    animation: wave-diffuse 3s ease-in infinite;
  }

  @keyframes wave-diffuse {
    0%{
      opacity: 0;
      transform: scale(0.6);
    }
    50%{
      opacity: 0.7;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      left: 0.5vw;
      transform: scale(0.2);
    }
  }

  .wave1 {
    position: absolute;
    top: -4vw;
    left: 43vw;
    width: 10vw;
    height: 5vw;
    background-color: #FFFFFF;
    border-radius: 18vw 18vw 0 0;
  }

  .wave2 {
    position: absolute;
    top: -2vw;
    left: 36vw;
    width: 7vw;
    height: 3vw;
    background-color: #FFFFFF;
    border-radius: 12vw 12vw 0 0;
  }

  .water {
    position: absolute;
    top: 2vw;
    left: -9vw;
    width: 69vw;
    height: 7vw;
    background-color: ${isNight ? '#254850' : '#4F7396'};
    transition: background-color 2s ease-out;
  }
}

`,
);