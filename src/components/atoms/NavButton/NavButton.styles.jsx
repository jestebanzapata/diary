import styled, { css } from 'styled-components';

export const StyledNavButton = styled.button(
  ({ finished, disabled }) =>
    css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: white;
        font-size: 32px;
        width: 120px;
        height: 120px;
        background-color: ${finished ? "#ffc802" : "#d45757"};
        border: 4px solid white;
        border-radius: 50%;
        font-weight: 900;
        box-shadow: 0 9px 1px #858585;

        &:disabled {
          background-color: #858585;
        }

        ${!disabled && css`

          &:active {
            width: 100px;
            height: 100px;
          }

          &:hover {
            background-color: ${finished ? "#dcb117" : "#b34242"};
          }

        `}
        `,
);
