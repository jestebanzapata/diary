import styled from 'styled-components';


export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  color: white;
  font-size: 18px;
  height: 100%;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin: 15px;
    border-radius: 20px;
    background-color: #01be86;

    h2 {
      font-size: 15px;
      font-weight: 600;
    }
  }

  .round {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: white;
    width: 40px;
    height: 40px;
    margin-bottom: 10px;
    color: black;
  }
`;