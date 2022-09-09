import styled, { css, keyframes } from 'styled-components';
import Ships from '../../assets/static/ship';

import { animated } from 'react-spring'

const defaultShip = { type: 'Unknown', color: 'gray'};

const crescendoKeyframes = keyframes`
    0%   {transform: scale(1.2);}
    100% {transform: scale(1.4);}
`;

const notDraggableKeyframes = keyframes`
    0% { transform: rotate(0deg) scale(1); }
    25% { transform: rotate(12deg) scale(1.2); }
    50% { transform: rotate(0eg) scale(1.5); }
    75% { transform: rotate(-12deg) scale(1.2); }
    100% { transform: rotate(0deg) scale(1); }
`;

const notDraggable = css`
    animation: ${notDraggableKeyframes} 0.2s alternate ease-in-out;
`;

const crescendo = css`
    animation: ${crescendoKeyframes} 0.8s alternate infinite ease-in-out;
`;



export const StyledCell = styled.div(
    ({ color, isDraggable, isSelected }) =>
        css`
            display: flex;
            justify-content: center;
            align-items: center;
            /* border: 1px solid #bbd1d4;
            border-style:dashed; */
            font-weight: bold;
            font-size: 2rem;
            background-color: ${color};
            position: relative;
            z-index: 1;

            ${!isDraggable && css`
                &::after {
                    content: '';
                    position: absolute;
                    top: 45%;
                    width: 15%;
                    height: 15%;
                    border-radius: 50%;
                    background-color: black;
                }
            `}


            &:focus {
                z-index: 2;
                ${isDraggable ? (isSelected ? crescendo: null) : notDraggable}
            }

        `,
);