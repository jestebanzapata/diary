import styled, { css } from 'styled-components';

export const StyledToolbar = styled.div(
  () => css`
    display: flex;
    justify-content: space-between;

    position: absolute;
    bottom: 0;
    width: 90%;
    height: 120px;
    z-index: 5;
`,
);