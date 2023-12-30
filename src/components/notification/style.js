import styled from "styled-components";

export const NotificationTab = styled.div`
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
      text-align: center;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: -0.3px;
      color: #4c9eeb;
    }
  }
  .disable-tab 
  {
     
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    

    & {
      text-align: center;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: -0.3px;
      color: #687684;
    }
  }
`;
