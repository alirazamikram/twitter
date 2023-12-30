import React from "react";
import { Wrapper, ProfileBox, LeftSide, RightSide } from "./style";
import PopUPBtns from '../../layout/pop-up'

const Media = () => {
  const data = [
    {
      id: 1,
      profile: "images/pixelez-profile.svg",
      name: "Martha Craig",
      username: "@craig_love",
      time: "·10h",
      bio: "Freebie Alert!  ⚠  Mobile Apps Library consists of 120+ reconstructed screens of four popular mobile apps.",
      download:'apps.pixsellz.io',
      mediaimg : 'images/media-img.svg' ,
    },
  ];
  return (
    <Wrapper>
      {data.map((item, index) => {
        const { profile, name, username, time, bio,download, mediaimg } =
          item;
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
              <p className="download">Download : <span className="download-link">{download}</span></p>
              <p className="hashtag">#prototyping #wireframe #uiux #ux</p>
              <div className="img-div">
                <img src={mediaimg} className="media-img"/>
                <PopUPBtns/>
              </div>
              
            </RightSide>
          </ProfileBox>
        );
      })}
    </Wrapper>
  );
};

export default Media;
