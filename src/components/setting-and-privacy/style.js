import styled from "styled-components";

export const Wrapper = styled.div`
  display: none;

  @media (max-width: 480px) {
    display: block;
    width: 100%;
    height: 100vh;
    background: #e7ecf0;
  }

  .text-div {
    width: 100%;
    height: auto;
    padding: 10px;
    box-sizing: border-box;
  }
  .bottom-text {
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.15px;
    color: #687684;
  }
`;
export const PixelBox = styled.div`
  width: 100%;
  height: 48px;
  background: #e7ecf0;
  display: flex;
  align-items: center;
  padding-left: 20px;
  box-sizing: border-box;

  .pixsellez-text {
    font-style: normal;
    font-weight: 800;
    font-size: 19px;
    line-height: 23px;
    letter-spacing: -0.5px;
    color: #687684;
  }
`;
export const SettingBox = styled.div`
  width: 100%;
  height: 44px;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  box-sizing: border-box;
  border-bottom: 0.35px solid #ced5dc;

  .account-text {
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.3px;
    color: #141619;
  }
`;
export const GenerelBox = styled.div`
  width: 100%;
  height: 60px;
  background: #e7ecf0;
  display: flex;
  align-items: center;
  padding-left: 20px;
  box-sizing: border-box;

  .pixsellez-text {
    font-style: normal;
    font-weight: 800;
    font-size: 19px;
    line-height: 23px;
    letter-spacing: -0.5px;
    color: #687684;
  }
`;
