import styled from 'styled-components';


export const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
`;

export const StyledDialog = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;

  top: 50%;
  left: 50%;
  margin-top: -250px;  /* Negative half of height. */
  margin-left: -160px;  /* Negative half of width. */



  width: 320px;
  height: 500px;
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
  /* @media (min-width: 590px) {
    width: 320px;
    height: 500px;
    margin-top: 7vw;
  } */
`;

export const StyledDialogHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #d9d9d9;
  color: #6d6d6d;

`;

export const StyledDialogContent = styled.div`
  flex: 1 1 auto;
  margin: 15px;
  border-radius: 20px;
  background-color: #01be86;
  color: white;
`;