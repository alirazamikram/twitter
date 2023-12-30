import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  input {
    width: 100%;
    height: 44px;
    border: none;
    background: #e7ecf0;
    box-shadow: 0px 0.33px 0px #ced5dc;
    background-image: url("./media/Search icon.svg");
    background-repeat: no-repeat;
    background-position: 10px;
    padding-left: 30px;
    box-sizing: border-box;
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    letter-spacing: -0.4px;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  padding: 10px;
  box-sizing: border-box;
  align-items: center;
  height: 79.67px;
  padding: 8px 0;
  background: #ffffff;
  box-shadow: 0px 0.33px 0px #ced5dc;
  padding: 10px;
  box-sizing: border-box;

  .main-div {
    width: 80%;
    display: flex;
    gap: 5px;
    /* padding: 30px 0; */
  }
  .left {
    width: 20%;
  }
  img {
    width: 55px;
    height: 55px;
  }
  .right {
    width: 80%;
    /* padding-left: 10px; */
  }
  .name {
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.3px;
    color: #141619;
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

  p {
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.3px;
    color: #687684;
  }
`;
