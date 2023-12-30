import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #e7ecf0;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 8px 0;
  padding: 15px 0;

  .main-div {
    width: 100%;
    display: flex;
    gap: 5px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* padding: 30px 0; */
  }
  .left {
    width: 20%;
  }
  img {
    width: 56px;
    height: 56px;
  }
  .right {
    /* width: 300px; */
    overflow: hidden;
  }
  .name {
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.2px;
    color: #141619;
    height: 17px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 90%;
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
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.2px;
    color: #687684;
    height: 17px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 95%;
  }
`;

export const Box = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  overflow-x: scroll;
  padding-left: 20px;
  box-sizing: border-box;
  gap: 3%;
  border-bottom: 0.33px solid #ced5dc;
  background-color: white;
`;

export const Box1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 40px;
  background-color: white;

  p {
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.3px;
    color: #141619;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  background-color: white;
  height: 70px;
  align-items: center;
  justify-content: space-evenly;

  input {
    width: 305px;
    height: 32px;
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    letter-spacing: -0.4px;
    background: #e7ecf0;
    border-radius: 16px;
    border: none;
    text-align: center;
    background-image: url("./media/Search icon.svg");
    background-repeat: no-repeat;
    background-position: 62px;
  }
  h1 {
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    letter-spacing: -0.4px;
  }
  .recent-search {
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 800;
    font-size: 19px;
    line-height: 23px;
    letter-spacing: -0.5px;
    color: #687684;
  }
`;

export const Block = styled.div`
  width: 100%;
  height: 48px;
  background-color: #e7ecf0;
  display: flex;

  div {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 15px;
  }
  button {
    width: 19px;
    height: 19px;
    border: none;
    border-radius: 30px;
    background-color: #acb7c1;
    cursor: pointer;
  }

  h1 {
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 800;
    font-size: 19px;
    line-height: 23px;
    letter-spacing: -0.5px;
    color: #687684;
  }
`;
