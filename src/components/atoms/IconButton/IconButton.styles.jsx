import styled, { css } from 'styled-components';

export const StyledIconButton = styled.button(
  ({ finished, disabled }) =>
    css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: white;
        width: 40px;
        height: 40px;
        background-color: #485b65;
        border: 4px solid #8a9faa;
        border-radius: 6px;
        font-weight: 900;
        box-shadow: 0 5px 1px #252f34;

        &:active {
          width: 42px;
          height: 42px;
        }

        &:hover {
          background-color: #1e262b;
        }
        `,
);
