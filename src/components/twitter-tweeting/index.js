import React, { useState } from "react";
import { CameraDiv, InputMsg, KeyBoardIcon, TopBar, Wrapper } from "./style";
import {
  CameraSvg,
  GifSvg,
  LocationSvg,
  StatSvg,
  UploadSvg,
} from "../assets/svg";
import { useNavigate } from "react-router-dom";

const TwitterTweeting = () => {
  const navigate = useNavigate();
  const [activeBtn, setActiveBtn] = useState(false);

  const changeHandler = (e) => {
    if (e.target.value.length >= 1) {
      setActiveBtn(true);
    } else {
      setActiveBtn(false);
    }
  };
  return (
    <Wrapper>
      <TopBar>
        <p className="cancel-text" onClick={() => navigate("/")}>
          Cancel
        </p>
        <button
          className={activeBtn ? "tweet-btn-active" : "tweet-btn-disable"}
        >
          Tweet
        </button>
      </TopBar>
      <InputMsg>
        <div className="img-div">
          <img src="images/small-profile.svg" />
        </div>
        <div className="text-div">
          <textarea
            onChange={changeHandler}
            placeholder="What’s happening?"
            className="input-text"
          ></textarea>
        </div>
      </InputMsg>
      <CameraDiv>
        <div className="camera-card">
          <CameraSvg />
        </div>
      </CameraDiv>
      <KeyBoardIcon>
        <div className="left-icon">
          <UploadSvg />
          <GifSvg />
          <StatSvg />
          <LocationSvg />
        </div>
        <div className="right-icon">
          <button className="plus-btn">+</button>
        </div>
      </KeyBoardIcon>
    </Wrapper>
  );
};
export default TwitterTweeting;
