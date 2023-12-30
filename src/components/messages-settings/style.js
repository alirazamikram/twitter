import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  background-color: #e7ecf0;

  .privacy-div {
    background-color: #e7ecf0;
    padding: 10px;
  }

  .h1-privacy {
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 800;
    font-size: 19px;
    line-height: 23px;
    letter-spacing: -0.5px;
  }
`;

export const Container = styled.div`
  width: 100%;
  background-color: white;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .upper-div {
    width: 90%;
    display: flex;
  }
  .left-div {
    width: 80%;
    padding-top: 5px;
  }
  .right-div {
    width: 20%;
  }
  .lower-div {
    width: 90%;
  }
  h1 {
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.3px;
  }

  .switch {
    position: relative;
    display: inline-block;
    /* width: 51px; */
    height: 31px;
    width: 60px;
  }
  .switch input {
    display: none;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 20px;
  }
  .slider::before {
    position: absolute;
    content: "";
    height: 27px;
    width: 27px;
    left: 2px;
    bottom: 2px;
    border-radius: 50%;
    background-color: white;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #59bc6c;
  }
  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }
  input:checked + .slider::before {
    transform: translateX(26px);
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: #4c9eeb;
  }
`;
