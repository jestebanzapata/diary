import React from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import classnames from 'classnames';
import { shootCell } from 'redux/actions/boardActions';
import { StyledCell } from './Cell.style';
import { animated, useSpring, useTransition } from "react-spring";
import { memo } from 'react';
import { setBoardInitialState, setConfig, selectCell } from '../../../redux/actions/boardActions';
import popSound from '../../../sound/pop-up-on.mp3';
import useSound from 'use-sound';

function Cell(props) {
    const { index, color, isDraggable, correctIndex, selectCell, gameState } = props;
    const { selectedCell } = gameState;
    const [play] = useSound(popSound);

    const handleCellClick = () => {
        selectCell({
            cell: { index, color, isDraggable, correctIndex }
        });
        play();
    }

    return (
        <StyledCell role={"button"} tabIndex={0}
            color={color}
            isDraggable={isDraggable}
            isSelected={selectedCell && selectedCell.correctIndex === correctIndex}
            onClick={handleCellClick}
        >
        </StyledCell>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        gameState: state.board.gameState,
    }
};

const mapDispatchToProps = {
    selectCell
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(Cell));