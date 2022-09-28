import styled, { css } from 'styled-components';

const mainColor = "#db4c44";
export const StyledBoatContainer = styled.div(
  ({ color= mainColor }) =>
    css`
  position: relative;
  width: 30vw;
  animation: boat-move 3s ease-in-out infinite;

  @keyframes boat-move {
    50% {
      transform: rotate(-5deg) translateY(5px);
    }
  }

  .pipe{
    position: absolute;
    width: 5vw;
    height: 6.5vw;
    background-color: ${color};
    top: 2.5vw;
    left: 11.5vw;
    z-index: 10;
    border-top: 2.5vw solid #5A4F43;
    border-top-left-radius: 1vw;
    border-top-right-radius: 1vw;
  }

  .cabin1 {
    position: absolute;
    left: 18.5vw;
    z-index: 10;
    width: 15vw;
    height: 12vw;

    .ceil1 {
      display: flex;
      align-items: center;
      background-color: #8B715B;
      width: 100%;
      height: 2.5vw;

      .line {
        width: 100%;
        background-color: #5A4F43;
        height: 0.5vw;
      }
    }

    .ceil2 {
      width: 100%;
      height: 2.5vw;
      background-color: #5A4F43;
    }

    .room {
      height: 7vw;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;

      .window {
        width: 4.5vw;
        height: 4.5vw;
        border-radius: 50%;
        background-color: #C7F3FF;
        border: 1vw solid #5A4F43;
      }
    }

  }

  .cabin2 {
    position: absolute;
    top: 2.5vw;
    left: 33.5vw;
    z-index: -1;
    width: 20vw;
    height: 20vw;

    .ceil1 {
      display: flex;
      align-items: center;
      background-color: #8B715B;
      width: 100%;
      height: 2.5vw;

      .line {
        width: 100%;
        background-color: #5A4F43;
        height: 0.5vw;
      }
    }

    .ceil2 {
      width: 100%;
      height: 2.5vw;
      background-color: #5A4F43;
    }

    .room {
      height: 7vw;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .window {
      position: absolute;
      left: 7.5vw;
      width: 9.5vw;
      height: 4.5vw;
      background-color: #C7F3FF;
      border: 1vw solid #5A4F43;
    }

  }

  .undercabin {
    position: absolute;
    left: 28%;
    top: 11vw;
    width: 26vw;
    height: 9vw;
    z-index: 9;
    .under1 {
      background-color: #77be6e;
      height: 1vw;
    }
    .under2 {
      background-color: #579C5D;
      height: 5vw;
      position: relative;

      .float {
        position: absolute;
        right: 1vw;
        top: 0.5vw;
        width: 4vw;
        height: 4vw;
        background-color: white;
        border-radius: 50%;

        .hole {
          position: absolute;
          width: 1.5vw;
          height: 1.5vw;
          background-color: #579C5D;
          border-radius: 50%;
          right: 0;
          top: 0;
          margin: auto;
          left: 0;
          bottom: 0;
          z-index: 2;
        }

        .line1 {
          border-radius: 0.4vw;
          background-color: ${color};
          position: absolute;
          width: 1vw;
          height: 1.5vw;
          right: 1.5vw;
        }


        .line2 {
          border-radius: 0.2vw;
          background-color: ${color};
          position: absolute;
          width: 1.5vw;
          height: 1vw;
          bottom: 1.5vw;
        }

        .line3 {
          border-radius: 0.2vw;
          background-color: ${color};
          position: absolute;
          width: 1vw;
          height: 1.5vw;
          right: 1.5vw;
          bottom: 0;
        }

        .line4 {
          border-radius: 0.4vw;
          background-color: ${color};
          position: absolute;
          width: 1.5vw;
          height: 1vw;
          bottom: 1.5vw;
          right: 0;
        }
      }
    }
  }

  .underboat1 {
    position: absolute;
    left: 15%;
    top:17vw;
    .floor {
      background-color: #5A4F43;
      width: 45vw;
      height: 1.5vw;
      border-radius: 1vw;
      z-index: 3;
    }

    .underfloor {
      position: absolute;
      top: 1vw;
      width: 30vw;
      left: 1.5vw;
      z-index: 2;
      border-top: 10vw solid ${color};
      border-left: 5vw solid transparent;
      border-right: 5vw solid transparent;
    }
  }

.underboat2 {
  position: absolute;
  left: 35%;
  top: 17vw;
  .floor {
    background-color: #5A4F43;
    width: 30vw;
    height: 1.5vw;
    border-radius: 1vw;
    position: absolute;
    left: 25vw;
    top: -2vw;
    z-index: 3;
  }

  .underfloor {
    position: absolute;
    top: -1.5vw;
    width: 8.5vw;
    left: 17.5vw;
    z-index: 2;
    border-bottom: 12.5vw solid ${color};
    border-left: 9vw solid transparent;
    border-right: 5.5vw solid ${color};

    .front {
      position: absolute;
      border-top: 12.5vw solid ${color};
      border-left: 9vw solid ${color};
      border-right: 9vw solid transparent;
      left: 6.5vw;
    }
  }
}
 `,
);