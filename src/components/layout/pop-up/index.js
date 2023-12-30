import React, { useState } from "react";
import { AllBtn, BgBlur, Wrapper } from "./style";
import { PensilSvg, RetweetSvg } from "../../assets/svg";
import { useNavigate } from "react-router-dom";

const PopUpBtns = () => {
  const [popup, setPopUp] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <AllBtn>
        <div className="all-btn">
          <div className="img-number-btn">
            <img src="images/comment.svg" alt="comment" />
            <p className="btn-number">10</p>
          </div>
          <div className="img-number-btn">
            <img
              src="images/retweet.svg"
              alt="comment"
              onClick={() => setPopUp(true)}
            />
            <p className="btn-number">5</p>
          </div>
          <div className="img-number-btn">
            <img src="images/like-heart.svg" alt="comment" />
            <p className="btn-number">21</p>
          </div>
          <div className="img-number-btn">
            <img src="images/share.svg" alt="comment" />
          </div>
        </div>
      </AllBtn>
      <Wrapper>
        <div className={popup ? "show" : "hide"}>
          <div className="retweet-div" onClick={()=> navigate('/retweeted-tweet')}>
            <RetweetSvg />
            <h3 className="retweet-text">Retweet</h3>
          </div>
          <div className="retweet-div">
            <PensilSvg />
            <h3 className="retweet-comment-text">Retweet with comment</h3>
          </div>
          <button className="cancel-btn" onClick={() => setPopUp(false)}>
            Cancel
          </button>
        </div>
      </Wrapper>
      {popup ? <BgBlur onClick={() => setPopUp(false)} /> : ""}
    </>
  );
};
export default PopUpBtns;
