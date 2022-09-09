import styled, { css } from 'styled-components';

export const StyledStar = styled.div(
  ({ size, stars }) => css`
    width: ${size}px;
    height: ${size}px;
    box-shadow: ${stars};
    position: absolute;
    top: 0;
    left: 0;
`,
);