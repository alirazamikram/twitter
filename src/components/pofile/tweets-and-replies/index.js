import React from "react";
import { Wrapper, ProfileBox, LeftSide, RightSide, Content } from "./style";
import PopUPBtns from "../../layout/pop-up";
const TwitterReply = () => {
  const data = [
    {
      id: 1,
      profile: "images/pixelez-profile.svg",
      pinned: "Pinned Tweet",
      name: "Martha Craig",
      username: "@craig_love",
      time: "·12h",
      bio: "Scheme Constructor - your ultimate prototyping kit for all UX web and mobileepp design!",
      videoimg: "images/video-img.svg",
      contentimg: "images/icons-rectangle.svg",
      contenttext: (
        <>
          The Best Free Icon Packs Everyone <br /> Must Download in 2020 |
          GraphicM can add more
        </>
      ),
      contentcaption: "graphicmama.com",
    },
  ];
  return (
    <Wrapper>
      {data.map((item, index) => {
        const {
          profile,
          name,
          username,
          time,
          contentimg,
          contenttext,
          contentcaption,
        } = item;
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
              <Content>
                <div className="left-div">
                  <img src={contentimg} />
                </div>
                <div className="right-div">
                  <div className="upper-div">
                    <h1 className="text">{contenttext}</h1>
                  </div>
                  <div className="lower-div">
                    <p className="caption">{contentcaption}</p>
                  </div>
                </div>
              </Content>
              <PopUPBtns />
            </RightSide>
          </ProfileBox>
        );
      })}
    </Wrapper>
  );
};
export default TwitterReply;
