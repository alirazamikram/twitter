import React from "react";
import {  ProfileBox, Wrapper, Left, Right } from "./style";
import PopUpBtns from "../../layout/pop-up";

const NotiMention = () => {

  const data = [
    {
      id: 1,
      profile: "images/man-profile.svg",
      name: "Maximmilian",
      username: "@maxjacobson",
      time: "·3h",
      bio: (
        <>
          Hey
          <br /> @theflaticon @iconmonstr @pixsellz @dan
          <br /> ielbruce_ @romanshamin @_vect_
          <br /> @glyphish !<br /> Check our our new article “Top Icons <br />
          Packs and Resources for Web”. You are in! <br />
          😎
          <br /> 👉 marianeee.com/blog/top-icons...
        </>
      ),
      image: "images/card-img.svg",
    },
    {
      id: 2,
      profile: "images/man-profile.svg",
      name: "Maximmilian",
      username: "@maxjacobson",
      time: "·3h",
      bio: (
        <>
          Hey
          <br /> @theflaticon @iconmonstr @pixsellz @dan
          <br /> ielbruce_ @romanshamin @_vect_
          <br /> @glyphish !<br /> Check our our new article “Top Icons <br />
          Packs and Resources for Web”. You are in! <br />
          😎
          <br /> 👉 marianeee.com/blog/top-icons...
        </>
      ),
      image: "images/card-img.svg",
    },
  ];
  return (
    <Wrapper>
      {data.map((item, index) => {
        return (
          <ProfileBox key={index}>
            <Left>
              <img src={item.profile} alt="profile" />
            </Left>
            <Right>
              <div className="dropdown-both-div">
                <div className="name-username-div">
                  <p className="profile-name">{item.name} </p>
                  <p className="username">{item.username} </p>
                  <p className="time">{item.time}</p>
                </div>
                <div>
                  <button className="dropdown-btn"></button>
                </div>
              </div>
              <p className="bio-text">{item.bio}</p>
              <div className="image-div">
                <img src={item.image} alt="img" className="card-img" />
                <p className="card-description">
                  Top Icons Packs and Resources for Web flatlogic.com
                </p>
              </div>
              <PopUpBtns />
            </Right>
          </ProfileBox>
        );
      })}
    </Wrapper>
  );
};
export default NotiMention;
