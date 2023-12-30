import styled from "styled-components";

export const Wrapper = styled.div`
  display: none;

  @media (max-width: 480px) {
    display: block;
    width: 100%;
    height: 100vh;
  }
`;
export const Header = styled.div`
  width: 100%;
  height: 130px;
  background: #1f1f1f;
  display: flex;
  justify-content: center;
  align-items: center;

  .back-arrow-btn {
    position: absolute;
    width: 32px;
    height: 32px;
    left: 20px;
    top: 50px;
    border: navajowhite;
    outline: none;
    border-radius: 50%;
    background: #0f0f0f;
    background-image: url("images/left-arrow.svg");
    background-repeat: no-repeat;
    background-position: center;
  }

  .header-text {
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    text-align: center;
    letter-spacing: -0.9px;
    color: #dedede;
  }
`;
export const Bottom = styled.div`
  width: 100%;
  height: auto;

  .profile-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    box-sizing: border-box;
  }
  .profile-img {
    position: relative;
    bottom: 20px;
  }

  .edit-profile-btn {
    width: 93px;
    height: 32px;
    border: 1px solid #4c9eeb;
    border-radius: 16px;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.2px;
    color: #4c9eeb;
    outline: none;
    background: none;
  }
  .profile-name-div {
    padding-left: 20px;
  }
  .profile-name {
    font-style: normal;
    font-weight: 800;
    font-size: 22px;
    line-height: 26px;
    letter-spacing: -0.3px;
    color: #141619;
  }
  .profile-username {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.3px;
    color: #687684;
  }
  .profile-bio-div {
    padding: 10px 10px 0px 20px;
  }
  .bio-text {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    letter-spacing: -0.3px;
    color: #141619;
  }
  .parent-link-calendar {
    display: flex;
    align-items: center;
    gap: 30px;
    padding: 10px 0px 0px 0px;
  }
  .link-div {
    display: flex;
    gap: 5px;
    align-items: center;
  }
  .link-text {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.2px;
    color: #4c9eeb;
  }
  .calendar-text {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.2px;
    color: #687684;
  }
  .follower-count {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.3px;
    color: #141619;
  }
`;
export const Tabs = styled.div`
  display: flex;
  width: 100%;
  height: 44px;
  background: #ffffff;
  margin-top: 10px;
  box-shadow: 0px 0.33px 0px #bdc5cd, 0px 0.66px 0px #ced5dc;

  .active {
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1.5px solid #4c9eeb;

    & {
      font-style: normal;
      font-weight: 600;
      font-size: 13px;
      line-height: 19px;
      text-align: center;
      letter-spacing: -0.3px;
      color: #4c9eeb;
    }
  }
  .disable {
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    & {
      font-style: normal;
      font-weight: 600;
      font-size: 13px;
      line-height: 19px;
      text-align: center;
      letter-spacing: -0.3px;
      color: #687684;
    }
  }
`;
