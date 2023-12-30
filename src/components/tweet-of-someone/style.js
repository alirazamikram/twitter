import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #e7ecf0;
  padding-bottom: 140px;
`;

export const Container = styled.div`
  width: 100%;
  background-color: white;
  border-bottom: 0.33px solid #ced5dc;
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

export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
    line-height: 31px;
    letter-spacing: -0.7px;
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

export const Reply = styled.div`
  display: flex;
  width: 100%;
  /* align-items: center; */
  justify-content: center;
  height: 180px;
  background-color: white;

  .left-div {
    width: 20%;
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
  }
  .image {
    width: 55px;
    height: 55px;
  }
  .mid-div {
    width: 70%;
    display: flex;
    flex-direction: column;
    padding-top: 20px;
  }
  .upper-div {
  }
  .title {
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.3px;
  }
  .title-span {
    color: #687684;
  }

  .replying {
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.3px;
    color: #687684;
  }
  .replying-span {
    color: #4c9eeb;
  }
  .middle-div {
  }
  p {
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.3px;
  }
  .tag {
    color: #4c9eeb;
  }
  .right-div {
    width: 10%;
  }
`;

export const MoreReply = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-bottom: 0.33px solid #ced5dc;

  .icon-div {
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .link-div {
    width: 80%;
  }
  a {
    text-decoration: none;
    cursor: pointer;
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.3px;
    color: #4c9eeb;
  }
`;
