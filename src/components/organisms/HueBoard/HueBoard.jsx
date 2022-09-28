import React, { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
    StyledBoard,
    StyledBoardSubContainer,
} from './HueBoard.style';
import { gameStatus, LOCAL_STORAGE_KEY } from 'constants/types';
import Cell from 'components/molecules/Cell/Cell';
import { setBoardInitialState, setConfig } from '../../../redux/actions/boardActions';
import chroma from 'chroma-js';
import Dialog from 'components/atoms/Dialog/Dialog';
import RadarInfo from 'components/atoms/RadarInfo/RadarInfo';
import useSound from 'use-sound';
import backgroundSound from '../../../sound/silent.mp3';

const HueBoard = (props) => {
    const { boardConfig, gameState, setBoardInitialState, setConfig } = props;
    const { board } = gameState;
    const [showWinModal, setShowWinModal] = useState(false);
    const [play] = useSound(backgroundSound);

    useEffect(() => {
        buildRandomBoard();

    }, []);


    useEffect(() => {
        if (gameState.status === gameStatus.FINISHED){
            console.log("show won modal");
            setShowWinModal(true);
            localStorage.setItem(`${LOCAL_STORAGE_KEY.LEVEL_FINISHED}${boardConfig.id}`, true);
            play();
        }
    }, [gameState.status]);

    const shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    const buildRandomBoard = () => {
        let boardData = [];
        let NotDraggableCells = [];
        let colors = [];
        const stepRows = boardConfig.stepRows;
        const stepColumns = boardConfig.stepColumns;
        const firstRowColorScale = chroma.scale([boardConfig.colors.color1, boardConfig.colors.color2]).colors(stepRows);
        const lastRowcolorScale = chroma.scale([boardConfig.colors.color3, boardConfig.colors.color4]).colors(stepRows);

        for (let index = 0; index < stepRows; index++) {
            const columnColor = chroma.scale([firstRowColorScale[index], lastRowcolorScale[index]]).colors(stepColumns);
            colors = colors.concat(columnColor);
        }

        for (let index = 0; index < colors.length; index++) {
            const isDraggable = !boardConfig.notDraggableSquares.includes(index);
            const cell = {
                isDraggable: isDraggable,
                color: colors[index],
                correctIndex: index,
            };
            if (isDraggable){
                boardData.push(cell);
            }else {
                NotDraggableCells.push(cell);
            }
        }

        shuffleArray(boardData);

        for (let index = 0; index < boardConfig.notDraggableSquares.length; index++) {
             boardData.splice(boardConfig.notDraggableSquares[index], 0, NotDraggableCells[index]);
        }

        setConfig({
            config: {
                rowSteps: stepRows,
                columnSteps: stepColumns
            }
        });
        setBoardInitialState({ board: boardData });
    };

    return (
        <>
            <Dialog title={"RADAR"} content={<RadarInfo result={boardConfig.result}/>} show={showWinModal}/>
            <StyledBoardSubContainer>
                <StyledBoard rows={boardConfig.stepRows} columns={boardConfig.stepColumns}>
                    {board.map((data, index) => {
                        return <Cell key={`cell-${data.correctIndex}`} index={index} {...data}></Cell>;
                    })}
                </StyledBoard>
            </StyledBoardSubContainer>
        </>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        gameState: state.board.gameState,
    }
  };

const mapDispatchToProps = {
    setBoardInitialState,
    setConfig
};

export default connect(mapStateToProps, mapDispatchToProps)(HueBoard);