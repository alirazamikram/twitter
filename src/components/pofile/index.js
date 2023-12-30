import React, { useState } from "react";
import { Bottom, Header, Tabs, Wrapper } from "./style";
import { CalendarSvg, LinkIconSvg } from "../assets/svg";
import { useNavigate } from "react-router-dom";
import Twitter from "./tweets";
import TwitterReply from "./tweets-and-replies";
import Media from "./twitter-media";
import Like from "./likes";
import FooterNav from "../layout/footerNav"

const Profile = () => {
  const [activetab, setActiveTab] = useState(0);
  const navigate = useNavigate();
  const data = [
    {
      img1: <LinkIconSvg />,
      text1: "pixsellz.io",
      img2: <CalendarSvg />,
      text2: "Joined September 2018",
    },
    {
      para1: "218",
      following: 'Following',
      para2: "118",
      text2: "Followers",
    },
  ];
  return (
    <Wrapper>
      <Header>
        <button className="back-arrow-btn" onClick={()=> navigate('/')}></button>
        <h1 className="header-text">Digital Goodies Team</h1>
      </Header>
      <Bottom>
        <div className="profile-div">
          <img
            src="images/pixelz-profile.svg"
            alt="profile"
            className="profile-img"
          />
          <button className="edit-profile-btn">Edit Profile</button>
        </div>
        <div className="profile-name-div">
          <h3 className="profile-name">Pixsellz</h3>
          <h3 className="profile-username">@pixsellz</h3>
        </div>
        <div className="profile-bio-div">
          <p className="bio-text">
            Digital Goodies Team - Web & Mobile UI/UX development; Graphics;
            Illustrations
          </p>
          {data.map((item, index) => {
            const { para1, img1, text1, para2, img2, text2,following } = item;
            return (
              <div className="parent-link-calendar" key={index}>
                <div className="link-div">
                  <p className="follower-count">{para1}</p>
                  <p className="calendar-text">{following}</p>
                  {img1}
                  <p className="link-text">{text1}</p>
                </div>
                <div className="link-div">
                  <p className="follower-count">{para2}</p>
                  {img2}
                  <p className="calendar-text">{text2}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Bottom>
      <Tabs>
        <div
          className={activetab === 0 ? "active" : "disable"}
          onClick={() => setActiveTab(0)}
        >
          <h4 className="tab-text">Tweets</h4>
        </div>
        <div
          className={activetab === 1 ? "active" : "disable"}
          onClick={() => setActiveTab(1)}
        >
          <h4 className="tab-text">Tweets & replies</h4>
        </div>
        <div
          className={activetab === 2 ? "active" : "disable"}
          onClick={() => setActiveTab(2)}
        >
          <h4 className="tab-text">Media</h4>
        </div>
        <div
          className={activetab === 3 ? "active" : "disable"}
          onClick={() => setActiveTab(3)}
        >
          <h4 className="tab-text">Likes</h4>
        </div>
      </Tabs>
      {activetab === 0 && <Twitter />}
      {activetab === 1 && <TwitterReply />}
      {activetab === 2 && <Media />}
      {activetab === 3 && <Like />}
      <FooterNav/>
    </Wrapper>
  );
};
export default Profile;
