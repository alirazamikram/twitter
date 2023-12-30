import React from "react";
import { Wrapper,ProfileBox,LeftSide,RightSide } from "./style";
import PopUpBtns from "../../layout/pop-up";
import { useNavigate } from "react-router-dom";

const Like = () => {
  const data = [

    {
      id: 1,
      profile: "images/pixelez-profile.svg",
      name: "Martha Craig",
      username: "@craig_love",
      time: "·10h",
      bio: "When we first launched Vector Mockups, I had wrote that in 2018 our free product downloads was 28K+ and we had set a goal to double this figure by the end of 2019.  Today our team and I are glad to announce tgat we aave easily hit our goals with 47k+ downloads in 2019.",
      mediaimg: "images/like-img.svg",
      thread :'Show this thread',

    },
  ];
  return (
    <Wrapper>
      {data.map((item, index) => {
        const { profile, name, username, time, bio, thread, mediaimg } = item;
        return (
          <ProfileBox key={index}>
            <LeftSide>
              <img src={profile} alt="image" />
            </LeftSide>
            <RightSide>
              <div className="dropdown-both-div">
                <div className="name-username-div">
                  <p className="profile-name">{name}</p>
                  <p className="username">{username} </p>
                  <p className="time">{time}</p>
                </div>
                <div>
                  <button className="dropdown-btn"></button>
                </div>
              </div>
              <p className="bio-text">{bio}</p>
             
              <p className="hashtag">#prototyping #wireframe #uiux #ux</p>
              <div className="img-div">
                <img src={mediaimg} className="media-img" />
                <PopUpBtns />
              </div>
              <p className="thread">{thread}</p>
            </RightSide>
          </ProfileBox>
        );
      })}
    </Wrapper>
  );
};
export default Like;
