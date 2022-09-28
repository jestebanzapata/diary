import styled from 'styled-components';

export const StyledHueContainer = styled.div`
    display: flex;
    //position: relative;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(180deg, #7abcffdc 0%, #cdeaff 100%);
    padding-top: 100px;
    overflow: hidden;

    .mountains {
        position: relative;
        width: 100vw;
        height: 400px;
        bottom: 0px;
        border: 1px solid black;
        overflow: hidden;
    }

    .floor {
        position: absolute;
        width: 100vw;
        height: 54px;
        bottom: -7px;
        background-color: #486a48;
    }

    .mountain1 {
        position: absolute;
        bottom: 47px;
        left: -210px;
        border-left: 200px solid transparent;
        border-right: 200px solid transparent;
        border-bottom: 160px solid #003f5e;
        z-index: 3;
    }

    .mountain31 {
        position: absolute;
        bottom: 47px;
        left: 230px;
        border-left: 200px solid transparent;
        border-right: 200px solid transparent;
        border-bottom: 160px solid #37a7df;
        z-index: 3;
    }

    .mountain21 {
        position: absolute;
        bottom: 47px;
        left: 80px;
        border-left: 120px solid transparent;
        border-bottom: 100px solid #37a7df;
        z-index: 2;
    }

    .mountain22 {
        position: absolute;
        bottom: 47px;
        left: 200px;
        border-right: 120px solid transparent;
        border-bottom: 100px solid #003f5e;
        z-index: 2;
    }
`;