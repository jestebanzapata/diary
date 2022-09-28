import styled, { css, keyframes } from 'styled-components';

const animStar = keyframes`
    from {
      transform: translateX(0px)
    }
    to {
      transform: translateX(-2000px)
    }
`;

export const StyledStar = styled.div(
  ({ size, stars  }) => css`
    width: ${size}px;
    height: ${size}px;
    box-shadow: ${stars};
    position: absolute;
    top: 0;
    left: 0;
    animation: ${animStar}  ${100 *size}s linear infinite;
`,
);