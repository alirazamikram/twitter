import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
`;
export const ProfileBox = styled.div`
  width: 100%;
  ${"" /* height: 199.33px; */}
  height:auto;
  display: flex;
  box-shadow: 0px 0.33px 0px #ced5dc;
`;
export const LeftSide = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding-bottom: 8px;
  padding-top: 20px;
  box-sizing: border-box;
`;
export const RightSide = styled.div`
  width: 80%;
  height: 100%;
  padding-top: 10px;

  .heart-liked-div {
    display: flex;
    gap: 20px;
    position: relative;
    right: 30px;
    padding-top: 5px;
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
    color: var(--second-color);
  }
  .dropdown-both-div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 3px 0px;
  }

  .name-username-div {
    display: flex;
    gap: 5px;
    align-items: center;
  }
  .profile-name {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.3px;
    color: var(--main-color);
  }
  .username {
    color: var(--second-color);
  }
  .time {
    color: #687684;
  }
  .dropdown-btn {
    background: url("images/dropdown.svg");
    background: url(images/dropdown.svg);
    width: 20px;
    height: 10px;
    border: none;
    outline: none;
    background-repeat: no-repeat;
    background-position: 1px;
    margin-right: 10px;
  }
  .bio-text {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.3px;
    color: var(--main-color);
    padding-right: 10px;
  }
  .download {
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.3px;
    color: #687684;
    padding: 10px 0px;
  }
  .download-link {
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.3px;
    color: #4c9eeb;
  }
  .hashtag {
    padding: 10px 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.3px;
    color: #4c9eeb;
    padding-top: 10px;
  }
  .img-div {
    padding: 0px 10px 10px 0px;
  }
  .media-img {
    width: 100%;
  }
`;
