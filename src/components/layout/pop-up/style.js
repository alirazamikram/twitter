import styled from "styled-components";
export const AllBtn = styled.div`
  width: 80%;
  height: auto;
  padding-left:10px;

  .all-btn {
    display: flex;
    gap: 50px;
    margin: 8px 0px;
  }
  .img-number-btn {
    display: flex;
    gap:5px;
  }
  .btn-number {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.3px;
    color: var(--second-color);
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

export const Wrapper = styled.div`

  .show {
    width: 100%;
    height: 235px;
    background: #ffffff;
    border-radius: 12px 12px 0px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    transition: all 0.5s ease 0s;
    opacity: 1;
    z-index: 100;
  }
  .hide {
    width: 100%;
    height: 0px;
    ${"" /* background: #ffffff; */}
    background: darkgray;
    border-radius: 12px 12px 0px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: -235px;
    left: 0;
    transition: all 0.5s ease 0s;
    opacity: 0;
    z-index: 100;
    right: 0;
  }

  .retweet-div {
    width: 100%;
    height: 60px;
    display: flex;
    gap: 20px;
    padding: 20px;
    box-sizing: border-box;
  }
  .retweet-text {
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 23px;
    letter-spacing: -0.5px;
    color: #141619;
  }
  .retweet-comment-text {
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 23px;
    letter-spacing: -0.5px;
    color: #141619;
  }
  .cancel-btn {
    width: 360px;
    height: 48px;
    background: #e7ecf0;
    border-radius: 24px;
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 23px;
    text-align: center;
    letter-spacing: -0.5px;
    color: #000000;
    border: none;
    outline: none;
    margin-top: 10px;
  }
`;
export const BgBlur = styled.div`
  width: 100%;
  height: 100vh;
  background:black;
  opacity:0.8;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index:1;
  animation: animation 0.5s;

  @keyframes animation {
    0% {
      opacity: 0;
    }
    90% {
      opacity: 0.8;
    }
    100% {
      opacity:0.8;
    }
  }
`;
