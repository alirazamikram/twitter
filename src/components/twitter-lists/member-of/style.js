import styled from "styled-components";
export const Wrapper = styled.div`
  display: none;

  @media (max-width: 480px) {
    width: 100%;
    height: 100vh;
    background: #e7ecf0;
    display: block;
  }
`;
export const Header = styled.div`
  width: 100%;
  height: 70px;
  background: #ffffff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 45%;
  padding: 0px 20px;
  box-sizing: border-box;
  .lists-text {
    font-style: normal;
    font-weight: 800;
    font-size: 17px;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.5px;
    color: #141619;
  }
`;
export const ListTab = styled.div`
  display: flex;
  width: 100%;
  height: 44px;
  background: #ffffff;
  box-shadow: 0px 0.33px 0px #ced5dc;

  .active-tab {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1.5px solid #4c9eeb;

    & {
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      letter-spacing: -0.3px;
      color: #4c9eeb;
    }
  }
  .disable-tab {
     {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    & {
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      letter-spacing: -0.3px;
      color: #687684;
    }
  }
`;
export const Bottom = styled.div`
  width: 100%;
  height: 100%;
  background: #e7ecf0;
`;

export const ListBox = styled.div`
  width: 100%;
  display: flex;
  height: 109.67px;
  background: #ffffff;
  border-bottom: 0.33px solid #ced5dc;

  .left {
    width: 80%;
    padding-left:10px;
  }
  .list-name {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.15px;
    color: #141619;
    padding: 10px 0px 5px 10px;
  }
  .list-bio {
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 23px;
    letter-spacing: -0.5px;
    color: #141619;
    padding: 0px 10px;
  }
  .system-text {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.3px;
    color: #687684;
    padding: 0px 10px;
  }
  .list-count-div {
    display: flex;
    gap: 5px;
    align-items: center;
  }
  .list-count {
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.15px;
    color: #687684;
    padding-left: 10px;
  }
  .list-count-member {
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.15px;
    color: #687684;
  }
  .right {
    width: 20%;
  }
  .img {
    padding-top: 10px;
    width: 55px;
    height: 55px;
  }
`;
