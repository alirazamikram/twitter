import styled from "styled-components";
export const Wrapper = styled.div`
  display: none;

  @media (max-width: 480px) {
    width: 100%;
    height: 100vh;
    background: #ffffff;
    display: block;
    
    animation : animation 0.5s ease-in-out;
  }
  @keyframes animation {
    0% {
      position:absolute;
    right:100vw;
    }
    100% {
      position:absolute;
    right:0;
    }
  }
`;
export const TopBar = styled.div`
  width: 100%;
  height: 70px;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  box-sizing: border-box;

  .cancel-text {
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    letter-spacing: -0.3px;
    color: #4c9eeb;
  }
  .tweet-btn-active {
    width: 67px;
    height: 34px;
    background:#4c9eeb;
    border-radius: 17px;
    border: none;
    outline: none;
    cursor: pointer;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: -0.5px;
    color: #ffffff;
  }
  .tweet-btn-disable {
    width: 67px;
    height: 34px;
    background: #b9dcf7;
    border-radius: 17px;
    border: none;
    outline: none;
    cursor: pointer;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: -0.5px;
    color: #ffffff;
  
  }
  

`;
export const InputMsg = styled.div`
  width: 100%;
  height: 363px;
  background: #ffffff;
  display: flex;
  padding: 10px;
  box-sizing: border-box;

  .img-div {
    width: 10%;
    height: 100%;
  }

  .text-div {
    width: 90%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
  }

  .input-text {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
  }
`;

export const CameraDiv = styled.div`
  width: 100%;
  height: 94px;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0px 20px;
  box-sizing: border-box;
  background: #ffffff;

  .camera-card {
    width: 78px;
    height: 78px;
    border: 0.35px solid #ced5dc;
    border-radius: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const KeyBoardIcon = styled.div`
  width: 100%;
  height: 49.67px;
  background: #ffffff;
  box-shadow: 0px -0.33px 0px #bdc5cd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  box-sizing: border-box;

  .left-icon {
    display: flex;
    gap: 35px;
  }

  .plus-btn {
    width: 20px;
    height: 20px;
    background: #b9dcf7;
    border-radius: 50%;
    border: none;
    outline: none;
    cursor: pointer;
    color: #ffffff;
  }
`;
