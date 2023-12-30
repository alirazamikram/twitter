import React from "react";
import { Wrapper, AllBtn,TweetReplyBox } from "./style";
import { useNavigate } from "react-router-dom";
const VideoPlayer = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div className="top-btn-div">
        <button className="cross-btn" onClick={()=> navigate('/profile')}></button>
        <button className="minimize-btn"></button>
      </div>
      <div className="video-div">
        <video controls className="video">
          <source src="images/bg-video.mp4" />
        </video>
        <AllBtn>
          <div className="all-btn">
            <div className="img-number-btn">
              <img src="images/comment-2.svg" alt="comment" />
              <p className="btn-number">10</p>
            </div>
            <div className="img-number-btn">
              <img
                src="images/retweet-2.svg"
                alt="comment"
                
              />
              <p className="btn-number">5</p>
            </div>
            <div className="img-number-btn">
              <img src="images/heart-2.svg" alt="comment" />
              <p className="btn-number">21</p>
            </div>
            <div className="img-number-btn">
              <img src="images/share-2.svg" alt="comment" />
            </div>
          </div>
        </AllBtn>
      </div>
      <TweetReplyBox>
          <img src="images/small-profile.svg" alt="image" />
          <input
            type="text"
            placeholder="Tweet your reply"
            className="tweet-input"
          />
        </TweetReplyBox>
    </Wrapper>
  );
};
export default VideoPlayer;
