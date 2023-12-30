import styled from "styled-components";

export const Wrapper = styled.div`
  display: none;
  @media (max-width: 480px) {
    width: 100%;
    height: 100vh;
    display: block;
    background: powderblue;
  }
`;

export const RetweetBox = styled.div`
  width: 100%;
  height: 739px;
  background: #ffffff;
  position: relative;
  padding-bottom: 70px;

  .retweet-text-div {
    display: flex;
    align-items: center;
    gap: 20px;
    padding-left: 30px;
  }
  .heart-img {
    position: relative;
    left: 6px;
  }
  .liked-text {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #687684;
  }

  .profile-div {
    width: 100%;
    height: 88px;
    display: flex;
  }
  .left {
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .right {
    width: 80%;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
  }
  .name-username-div {
    width: 90%;
  }
  .down-arrow-div {
    width: 10%;
  }
  .name-text {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.3px;
    color: #141619;
  }
  .username-text {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.3px;
    color: #687684;
  }
  .des-div {
    padding: 10px;
    box-sizing: border-box;
  }
  .desription-text {
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 300;
    font-size: 22px;
    line-height: 32px;
    letter-spacing: -0.65px;
    color: #141619;
  }
  .emoji-text {
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-style: normal;
    font-weight: 300;
    font-size: 22px;
    line-height: 32px;
    letter-spacing: -0.65px;
    color: #141619;
  }
  .link-text {
    color: #4c9eeb;
  }
  .img-div {
    display: flex;
    justify-content: center;
  }
`;
export const TweetReplyBox = styled.div`
  width: 100%;
  height: 51.33px;
  background: darkgray;
  background: #ffffff;
  box-shadow: 0px -0.33px 0px #bdc5cd;
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px;
  box-sizing: border-box;
  position: absolute;
  bottom: 70px;

  .tweet-input {
    width: 331px;
    height: 35px;
    background: #e7ecf0;
    border-radius: 17.5px;
    border: none;
    outline: none;
    padding-left: 10px;
  }
`;
