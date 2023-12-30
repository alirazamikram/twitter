import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #e7ecf0;
`;

export const Container = styled.div`
  width: 100%;
  background-color: white;
`;

export const Firstblock = styled.div`
  width: 100%;
  display: flex;
  height: 70px;
  box-sizing: border-box;
  padding: 0 20px;
  align-items: center;

  .left-div {
    width: 20%;
  }
  .middle-div {
    width: 70%;
    display: flex;
    flex-direction: column;
  }
  .right-div {
    width: 10%;
    display: flex;
    justify-content: flex-end;
  }
  h2 {
    color: #687684;
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.3px;
  }
  h1 {
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.3px;
  }
  img {
    width: 55px;
    height: 55px;
  }
`;
export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  height: 79px;
  width: 90%;
  border: 0.33px solid #ced5dc;
  border-radius: 12px;
  display: flex;
  align-items: center;
  .left-div {
    width: 30%;
    height: 79px;
  }
  img {
    height: 79px;
    border: none;
    border-radius: 8px 0px 0px 8px;
  }
  .right-div {
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 10%;
  }
  .upper-div {
    width: 100%;
    height: 38px;
    overflow: hidden;
  }
  .text {
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.3px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .lower-div {
  }
  .caption {
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.3px;
    color: #687684;
  }
`;

export const FirstDiv = styled.div`
  width: 90%;
  height: 70px;
  display: flex;
  align-items: center;
  p {
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 300;
    font-size: 22px;
    line-height: 26px;
    letter-spacing: -0.6px;
    color: #687684;
  }
`;

export const SecondDiv = styled.div`
  width: 90%;
  align-items: center;
  height: 60px;
  display: flex;
  border-bottom: 0.33px solid #bdc5cd;
  p {
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.3px;
    color: #687684;
  }
  a {
    color: #4c9eeb;
    cursor: pointer;
    text-decoration: none;
  }
`;

export const ThirdDiv = styled.div`
  display: flex;
  width: 90%;
  height: 60px;
  align-items: center;
  border-bottom: 0.33px solid #bdc5cd;
  gap: 10px;
  p {
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.3px;
    color: #687684;
  }
  span {
    font-weight: 700;
    color: black;
  }
`;

export const FourthDiv = styled.div`
  width: 90%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 60px;
  img {
    width: 18px;
    height: 18px;
  }
`;
export const BottomDiv = styled.div`
  width: 100%;
  background: white;
  justify-content: space-around;
  align-items: center;
  display: flex;
  height: 88px;
  position: fixed;
  bottom: 70px;
  input {
    width: 331px;
    height: 35px;
    background: #e7ecf0;
    border-radius: 16px;
    border: none;
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    letter-spacing: -0.3px;
    padding-left: 10px;
    box-sizing: border-box;
  }
`;
