import styled, { css } from 'styled-components';


export const ModalContainer = styled.div(
  ({ show }) => css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${show? 9: -1};
`,
);

export const StyledDialog = styled.div(
  ({show}) => css`
  display: flex;
  flex-direction: column;
  position: fixed;

  ${show ? css`top: 50%` : css`top: -25%`};
  transition: top 1s ease-in-out;
  left: 50%;
  margin-top: -250px;  /* Negative half of height. */
  margin-left: -140px;  /* Negative half of width. */



  width: 280px;
  height: 400px;
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
  /* @media (min-width: 590px) {
    width: 320px;
    height: 500px;
    margin-top: 7vw;
  } */

  .dialogContent{
    height: 100%;
  }
`,
);

export const StyledDialogHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #eeebeb;
  color: #6d6d6d;
  font-weight: 600;
`;
