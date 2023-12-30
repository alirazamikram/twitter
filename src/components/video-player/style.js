import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    180deg,
    #383838 0%,
    #3f3f3f 11.16%,
    #3f3f3f 95.83%
  );
  display: flex;
  justify-content: center;
  align-items: center;

  .top-btn-div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0px 20px;
    box-sizing: border-box;
    position: absolute;
    top: 50px;
  }
  .cross-btn {
    width: 32px;
    height: 32px;
    background: #000000;
    border-radius: 50%;
    border: none;
    outline: none;
    cursor: pointer;
    background-image: url("images/cross-icon.svg");
    background-repeat: no-repeat;
    background-position: center;
  }
  .minimize-btn {
    width: 32px;
    height: 32px;
    background: #000000;
    border-radius: 50%;
    border: none;
    outline: none;
    cursor: pointer;
    background-image: url("images/minimize-icon.svg");
    background-repeat: no-repeat;
    background-position: center;
  }
  .video {
    width: 100%;
  }
`;
export const AllBtn = styled.div`
  width: 100%;
  height: auto;

  .all-btn {
    display: flex;
    justify-content: center;
    gap: 70px;
    margin: 8px 0px;
  }
  .img-number-btn {
    display: flex;
    gap: 5px;
    align-items: center;
  }
  .btn-number {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.3px;
    ${"" /* color: var(--second-color); */}
    color:white;
  }
  .show-threads-text {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.3px;
    color: #4c9eeb;
  }
`;
export const TweetReplyBox = styled.div`
  width: 100%;
  height: 51.33px;
  background: transparent;
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px;
  box-sizing: border-box;
  position: absolute;
  bottom: 10px;

  .tweet-input {
    width: 331px;
    height: 35px;
    background: transparent;
    border-radius: 17.5px;
    border: none;
    outline: none;
    padding-left: 10px;
    border: 1px solid #474747;
    border-radius: 17.5px;
    color: white;
  }
  .tweet-input::placeholder {
    color: #c5c5c5;
    opacity: 1;
  }
`;
