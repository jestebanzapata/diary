import styled, { css } from 'styled-components';

export const StyledGeneralButton = styled.button(
  ({ finished, disabled }) =>
    css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: white;
        font-size: 22px;
        width: 217px;
        height: 46px;
        background-color: #77C299;
        border-radius: 35px;
        box-shadow: 0 5px 1px #508668;
        border: 1px solid transparent;

        &:disabled {
          background-color: #858585;
        }

        ${!disabled && css`

          &:active {
            width: 220px;
            height: 50px;
          }

          &:hover {
            background-color: #508668;
          }

        `}
        `,
);
