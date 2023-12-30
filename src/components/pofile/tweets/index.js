import React from "react";
import { ProfileBox, Wrapper, LeftSide, RightSide } from "./style";
import { PinSvg } from "../../assets/svg";
import PopUPBtns from '../../layout/pop-up'
import { useNavigate } from "react-router-dom";

const Twitter = () => {
  const navigate = useNavigate();
  const data = [
    {
      id: 1,
      pinimg: <PinSvg />,
      profile: "images/pixelez-profile.svg",
      pinned: "Pinned Tweet",
      name: "Martha Craig",
      username: "@craig_love",
      time: "·12h",
      bio: "Scheme Constructor - your ultimate prototyping kit for all UX web and mobileepp design!",
      videoimg:'images/video-img.svg' ,
    },
  ];
  return (
    <Wrapper>
      {data.map((item, index) => {
        const { pinimg, pinned, profile, name, username, time, bio ,videoimg} = item;
        return (
          <ProfileBox key={index}>
            <LeftSide>
              <img src={profile} alt="image" />
            </LeftSide>
            <RightSide>
              <div className="heart-liked-div">
                {pinimg}
                <p className="liked-text">{pinned} </p>
              </div>

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
              <div className="video-div">
              <img src={videoimg} className="video-img" onClick={()=> navigate("/video-player")}/>
              <p className="views-count">109 <span className="views-text">views</span></p>
              </div>
              <PopUPBtns />
            </RightSide>
          </ProfileBox>
        );
      })}
    </Wrapper>
  );
};
export default Twitter;
