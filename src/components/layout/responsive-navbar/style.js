import styled from "styled-components";

export const NavWrapper = styled.div`
  display: none;

  @media (max-width: 480px) {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    box-sizing: border-box;
    background: white;
    box-shadow: 0px 0.33px 0px #bdc5cd;
  }

  input {
    width: 255px;
    height: 32px;
    background: #e7ecf0;
    border-radius: 16px;
    border: none;
    text-align: center;
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    color: var(--second-color);
    text-align: center;
    letter-spacing: -0.3px;
    background-image: url("./media/Search icon.svg");
    background-repeat: no-repeat;
    background-position: 55px;
  }
  ${
    "" /* img {
    width: 32px;
    height: 32px;
  } */
  }
  h1 {
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 800;
    font-size: 17px;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.5px;
  }
  .done-text {
    cursor: pointer;
    color: #4c9eeb;
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.3px;
    position: absolute;
    right: 15px;
  }
  .topbar {
    width: 100%;
    height: 70px;
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    box-sizing: border-box;
  }
  .back-arrow-btn {
    position: absolute;
    left: 20px;
    top: 25px;
  }
`;

export const Toogle = styled.div`
  display: none;

  @media (max-width: 480px) {
    display: block;
    .show-toogle {
      width: 320px;
      height: 100vh;
      background: #ffffff;
      box-shadow: 0.33px 0px 0px #bdc5cd;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100;
      opacity: 1;
      transition: 0.5s;
    }
    .hide-toogle {
      width: 0px;
      height: 100vh;
      background: darkgray;
      background: #ffffff;
      box-shadow: 0.33px 0px 0px #bdc5cd;
      position: fixed;
      top: 0;
      left: -320px;
      z-index: 100;
      opacity: 0;
      transition: 0.5s;
    }
    .topbar {
      display: flex;
      justify-content: space-between;
      padding: 10px 20px;
    }
    .mutiple-profile {
      display: flex;
      gap: 5px;
      align-items: baseline;
    }

    .profile-data-div {
      display: flex;
      flex-direction: column;
      padding: 0px 20px;
    }
    .profile-name {
      font-style: normal;
      font-weight: 700;
      font-size: 19px;
      line-height: 23px;
      letter-spacing: -0.1px;
      color: #141619;
    }
    .username {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: -0.3px;
      color: #687684;
    }
    .following-main-div {
      display: flex;
      gap: 10px;
      margin: 10px 0px;
    }
    .following-count-div {
      display: flex;
      gap: 5px;
    }
    .total-following {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: -0.3px;
      color: #141619;
    }
    .following-text {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: -0.3px;
      color: #687684;
    }
    .menu-div {
      display: flex;
      flex-direction: column;
      border-bottom: 0.35px solid #bdc5cd;
    }
    .profile-div {
      width: 100%;
      height: 56px;
      background: #ffffff;
      display: flex;
      justify-content: start;
      align-items: center;
      gap: 20px;
      padding: 0px 20px;
      box-sizing: border-box;
    }
    .profile-text {
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 21px;
      letter-spacing: -0.1px;
      color: #141619;
    }
    .setting-and-privacy-text {
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 21px;
      letter-spacing: -0.1px;
      color: #141619;
      padding: 20px 20px;
      box-sizing: border-box;
    }
    .bottom-icon-div {
      position: absolute;
      bottom: 0;
      gap: 220px;
      display: flex;
      align-items: center;
      padding: 20px 20px;
      box-sizing: border-box;
    }
  }
`;
