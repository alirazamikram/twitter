import React, { useState } from "react";
import {
  Wrapper,
  Header,
  Container,
  BottomDiv,
  Firstblock,
  FirstDiv,
  SecondDiv,
  FourthDiv,
  Main,
  ThirdDiv,
  Reply,
  MoreReply
} from "./style";
import { LeftArrowSvg, DownArrowSvg, MenuIconSvg } from "../assets/svg";
import FooterNav from "../layout/footerNav";
import NavBar from "../layout/responsive-navbar";

const TweetOfSomeone = ( ) => {
 
    const data = [
    {
      image: "./images/profile-pic.svg",
      line: "./images/line-icon.svg",
      title: "kiero_d ",
      tspan: "@kiero_d ·2d",
      reply: "Replying to",
      rspan: "@karennne",
      para: "Interesting Nicola that not one reply or tag on this ",
      para2: "talent shout out in the 24hr since your tweet here......🤔",
      tag: "#UX",
    },
    {
      image: "./images/profile.svg",
      line: "./images/line-icon.svg",
      title: "karennne ",
      tspan: "@karennne · 2d",
      para: "Maybe I forgot the hashtags.",
      tag: " #hiringux #designjobs #sydneyux #sydneydesigners #uxjobs",
    },
     
  ];
  return (
    <>
    <Wrapper>
     <NavBar />
      <Container>
        <Firstblock>
          <div className="left-div">
            <img src="./images/profile.svg" />
          </div>
          <div className="middle-div">
            <h1>karennne</h1>
            <h2>@karennne</h2>
          </div>
          <div className="right-div">
            <DownArrowSvg />
          </div>
        </Firstblock>
        <Main>
          <FirstDiv>
            <p>~ ~ hiring for a UX Lead in Sydney - who should I talk to?</p>
          </FirstDiv>
          <SecondDiv>
            <p>
              09:28 · 2/21/20 · <a href="">Twitter Web App</a>
            </p>
          </SecondDiv>
          <ThirdDiv>
            <p>
              <span>6 </span> Retweets
            </p>
            <p>
              <span>15 </span> Likes
            </p>
          </ThirdDiv>
          <FourthDiv>
            <img src="images/comment.svg" alt="comment" />
            <img src="images/retweet.svg" alt="comment" />
            <img src="images/like-heart.svg" alt="comment" />
            <img src="images/share.svg" alt="comment" />
          </FourthDiv>
        </Main>
      </Container>
     
      {data?.map((item, index) => (
        <Reply key={index}>
          <div className="left-div">
            <img src={item.image} className="image" />
            <img src={item.line} />
          </div>
          <div className="mid-div">
            <div className="upper-div">
              <h1 className="title">
                {item.title}
                <span className="title-span">{item.tspan}</span>
              </h1>
              <h1 className="replying">
                {item.reply} <span className="replying-span">{item.rspan}</span>
              </h1>
            </div>
            <div className="middle-div">
              <p>
                {item.para} <span className="tag">{item.tag}</span>
                {item.para2}
              </p>
            </div>
            <div className="lower-div">
              <FourthDiv>
                <img src="images/comment.svg" alt="comment" />
                <img src="images/retweet.svg" alt="comment" />
                <img src="images/like-heart.svg" alt="comment" />
                <img src="images/share.svg" alt="comment" />
              </FourthDiv>
            </div>
          </div>
          <div className="right-div">
            <DownArrowSvg />
          </div>
        </Reply>
      ))}
      <MoreReply>
        <div className="icon-div">
        <MenuIconSvg/></div>
        <div className="link-div">
        <a href="">1 more reply</a>
        </div>
      </MoreReply>
       
    </Wrapper>
    <BottomDiv>
        <img src="./media/Round.svg" alt="image" />
        <input type="text" placeholder="Tweet your reply"></input>
      </BottomDiv>
     <FooterNav />
     </>
  );
};

export default TweetOfSomeone;
