import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  .input-div {
    padding: 10px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  input {
    width: 360px;
    height: 32px;
    background: #e7ecf0;
    border-radius: 16px;
    border: none;
    padding-left: 40px;
    box-sizing: border-box;
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    letter-spacing: -0.3px;
    background-image: url("./media/Search icon.svg");
    background-repeat: no-repeat;
    background-position: 20px;
  }
`;

export const Bottom = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
`;
export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 79.67px;
  padding: 8px 0;
  background: #ffffff;
  box-shadow: 0px 0.33px 0px #ced5dc;

  .main-div {
    width: 95%;
    display: flex;
    gap: 5px;
    /* padding: 30px 0; */
  }
  .left {
    width: 15%;
  }
  img {
    width: 55px;
    height: 55px;
  }
  .middle {
    width: 70%;
    /* padding-left: 10px; */
  }
  .right {
    width: 15%;
  }
  .date {
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: right;
    letter-spacing: -0.3px;
  }
  span {
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.3px;
    color: #141619;
  }
  p {
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.3px;
    color: #687684;
  }
`;
