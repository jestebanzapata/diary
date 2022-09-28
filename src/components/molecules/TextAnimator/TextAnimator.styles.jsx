import styled, { css } from 'styled-components';

export const StyledTextAnimator = styled.div(
  () => css`
    display: flex;
    width: 100vw;
    padding: 30px 10px;
    align-items: flex-start;
    justify-content: space-between;
    height: 100px;
`,
);

export const StyledText = styled.span(
  ({ isTitle }) => {
    return css`
        background-color: rgba(0,0,0, 42%);
        font-size: 24px;
        color: white;
        max-width: 68vw;
        text-align: center;
        margin: 0 8px;
        ${isTitle && css`
          color: black;
          display: flex;
          font-weight: 600;
          font-size: 26px;
          background-color: transparent;
          height: 100vh;
          align-items: center;
          justify-content: center;
        `};
    `;
  }
);