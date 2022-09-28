import styled from 'styled-components';

export const StyledMainContainer = styled.div`
  display: flex;
  position: relative;

  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  width: 100vw;
  height: 100vh;
  background-color: #EFD3A3;
  overflow: hidden;

  .buttonContainer {
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding-bottom: 130px;
  }

  .ocean {
    height: 5%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #015871;
    transform: rotate(180deg);
  }

.wave {
  background: url(https://cdn.kcak11.com/codepen_assets/wave_animation/wave.svg) repeat-x;
  position: absolute;
  top: -198px;
  width: 6400px;
  height: 198px;
  animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
  transform: translate3d(0, 0, 0);
}

.wave:nth-of-type(2) {
  top: -175px;
  animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite, swell 7s ease -1.25s infinite;
  opacity: 1;
}

@keyframes wave {
  0% {
    margin-left: 0;
  }
  100% {
    margin-left: -1600px;
  }
}

`;