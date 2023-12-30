import styled from "styled-components";
export const Wrapper = styled.div`
  display: none;

  @media (max-width: 480px) {
    width: 100%;
    height: 100vh;
    background: #e7ecf0;
    display: block;
    background: #e7ecf0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .list-heading {
    font-style: normal;
    font-weight: 800;
    font-size: 22px;
    line-height: 27px;
    text-align: center;
    letter-spacing: -0.15px;
    color: #141619;
    padding-bottom: 15px;
  }
  .list-description {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    letter-spacing: -0.3px;
    color: #687684;
    padding-bottom: 10px;
  }
  .create-list-btn {
    width: 110px;
    height: 34px;
    background: #4c9eeb;
    border-radius: 16px;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    letter-spacing: -0.15px;
    color: #ffffff;
    cursor: pointer;
    border: none;
    outline: none;
  }
`;