import React from "react";
import {
  RetweetBox,
  TweetReplyBox,
  Wrapper,
} from "./style";
import { DownArrowSvg } from "../assets/svg";
import FooterNav from "../layout/footerNav";
import NavBar from "../layout/responsive-navbar";

const RetweetedTweet = () => {
  return (
    <Wrapper>
      <NavBar />
      <RetweetBox>
        <div className="retweet-text-div">
          <img src="images/retweet.svg" alt="heart" className="heart-img" />
          <p className="liked-text">You Retweeted </p>
        </div>
        <div className="profile-div">
          <div className="left">
            <img src="/images/profile-img.svg" alt="image" />
          </div>
          <div className="right">
            <div className="name-username-div">
              <h3 className="name-text">Komol Kuchkarov</h3>
              <h3 className="username-text">@kkuchkarov</h3>
            </div>
            <div className="down-arrow-div">
              <DownArrowSvg />
            </div>
          </div>
        </div>
        <div className="des-div">
          <p className="desription-text">
            Quickly create a low-fi wireframe version of your web projects with
            ready-to-use layouts of Scheme Constructor.
          </p>
          <p className="emoji-text">
            Get it now on 👉
            <span className="link-text">constructor.pixsellz.io</span>
          </p>
        </div>
        <div className="img-div">
          <img src="images/tweet-reply-image.svg" alt="image" />
        </div>
        <TweetReplyBox>
          <img src="images/small-profile.svg" alt="image" />
          <input
            type="text"
            placeholder="Tweet your reply"
            className="tweet-input"
          />
        </TweetReplyBox>
      </RetweetBox>
      <FooterNav />
    </Wrapper>
  );
};
export default RetweetedTweet;
