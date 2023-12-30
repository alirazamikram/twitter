import styled from "styled-components";

export const Wrapper = styled.div`
  display: none;

  @media (max-width: 480px) {
    width: 100%;
    height: 100vh;
    background: #ffffff;
    display: block;
    overflow-y: scroll;
  }
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

  .small-profile {
    width: 37px;
    height: 37px;
    margin-top: 5px;
  }
`;
export const RightSide = styled.div`
  width: 80%;
  height: 100%;

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
    width: 302px;
  }
  .show-threads-text {
    color: var(--main-color);
  }
`;
export const BoxTwo = styled.div`
  display: flex;
  width: 100%;
  height: 105.33px;
  box-shadow: 0px 0.33px 0px #ced5dc;
`;
export const BoxTwoLeft = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .heart-img {
    position: relative;
    left: 20px;
    bottom: 10px;
  }
`;
export const BoxThree = styled.div`
  display: flex;
  width: 100%;
  height: 290.33px;
  box-shadow: 0px 0.33px 0px #ced5dc;
`;
export const BoxThreeLeft = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding-top: 16px;
  box-sizing: border-box;

  .heart-img {
    position: relative;
    left: 20px;
    bottom: 10px;
  }
`;
