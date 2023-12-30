import React, { useState } from "react";
import { NavWrapper, Toogle } from "./style";
import {
  BookmarkSvg,
  BulbSvg,
  ListSvg,
  MomentSvg,
  NavLogoSvg,
  NavStarsSvg,
  NavTwitterSvg,
  ProfileSvg,
  QRCodeSvg,
  TopicSvg,
  LeftArrowSvg,
} from "../../assets/svg";
import { BgBlur } from "../pop-up/style";
import { SettingSvg } from "../../assets/svg";
import { useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [toogle, setToogle] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toogleOpen = () => {
    return setToogle(true);
  };

  function clickHandler(id) {
    const clickFinder = data.find((elem) => {
      return id === elem.id;
    });
    if (clickFinder.id === 0) {
      return navigate("/profile");
    } else if (clickFinder.id === 1) {
      return navigate("/twitter-lists");
    }
  }

  const data = [
    {
      id: 0,
      img: <ProfileSvg />,
      name: "Profile",
    },
    {
      id: 1,
      img: <ListSvg />,
      name: "Lists",
    },
    {
      id: 2,
      img: <TopicSvg />,
      name: "Topics",
    },
    {
      id: 3,
      img: <BookmarkSvg />,
      name: "Bookmarks",
    },
    {
      id: 4,
      img: <MomentSvg />,
      name: "Moments",
    },
  ];
  return (
    <>
      <NavWrapper>
        {location.pathname === "/" ? (
          <>
            <NavLogoSvg onClick={toogleOpen} />
            <NavTwitterSvg />
            <NavStarsSvg />
          </>
        ) : location.pathname === "/trends" ? (
          <>
            <NavLogoSvg onClick={toogleOpen} />
            <input
              type="text"
              placeholder="Search Twitter"
              onClick={() => navigate("/search-suggestion")}
            ></input>
            <SettingSvg />
          </>
        ) : location.pathname === "/notification" ? (
          <>
            <NavLogoSvg onClick={toogleOpen} />
            <h1> Notifications </h1>
            <SettingSvg />
          </>
        ) : location.pathname === "/messages" ? (
          <>
            <NavLogoSvg onClick={toogleOpen} />
            <h1> Messages </h1>
            <SettingSvg onClick={() => navigate("/message-setting")} />
          </>
        ) : location.pathname === "/message-setting" ? (
          <>
            <div className="topbar">
              <LeftArrowSvg
                className="back-arrow-btn"
                onClick={() => navigate("/messages")}
              />
              <h1>Messages settings</h1>
              <a
                hre=""
                className="done-text"
              >
                Done
              </a>
            </div>
          </>
        ) : location.pathname === "/twitter-lists" ? (
          <>
            <div className="topbar">
              <LeftArrowSvg
                className="back-arrow-btn"
                onClick={() => navigate("/")}
              />
              <h1>Lists</h1>
            </div>
          </>
        ) : location.pathname === "/new-message" ? (
          <>
            <div className="topbar">
              <LeftArrowSvg
                className="back-arrow-btn"
                onClick={() => navigate("/messages")}
              />
              <h1> New message </h1>
            </div>
          </>
        ) : location.pathname === "/tweet-of-mine" ? (
          <>
            <div className="topbar">
              <LeftArrowSvg className="back-arrow-btn" />
              <h1> Tweet </h1>
            </div>
          </>
        ) : location.pathname === "/tweet-of-someone" ? (
          <>
            <div className="topbar">
              <LeftArrowSvg className="back-arrow-btn" />
              <h1> Tweet </h1>
            </div>
          </>
        ) : location.pathname === "/retweeted-tweet" ? (
          <>
            <div className="topbar">
              <LeftArrowSvg className="back-arrow-btn" onClick={()=> navigate('/')}/>
              <h1>Tweet</h1>
            </div>
          </>
        ) : location.pathname === "/setting-and-privacy" ? (
          <>
            <div className="topbar">
              <h1>Settings and privacy</h1>
              <p className="done-text" onClick={() => navigate("/")}>
                Done
              </p>
            </div>
          </>
        ) : (
          ""
        )}
      </NavWrapper>
      <Toogle>
        <div className={toogle ? "show-toogle" : "hide-toogle"}>
          <div className="topbar">
            <img src="images/pixelz-profile.svg" />
            <div className="mutiple-profile">
              <img src="images/another-account.svg" />
              <img src="images/multiple-account.svg" />
              <img src="images/menu-icon.svg" />
            </div>
          </div>
          <div className="profile-data-div">
            <h4 className="profile-name">Pixsellz</h4>
            <p className="username">@pixsellz</p>
            <div className="following-main-div">
              <div className="following-count-div">
                <p className="total-following">216</p>
                <p className="following-text">Following</p>
              </div>
              <div className="following-count-div">
                <p className="total-following">117</p>
                <p className="following-text">Followers</p>
              </div>
            </div>
          </div>
          <div className="menu-div">
            {data.map((item, index) => {
              return (
                <div
                  className="profile-div"
                  key={index}
                  onClick={() => clickHandler(index)}
                >
                  {item.img}
                  <h3 className="profile-text">{item.name}</h3>
                </div>
              );
            })}
          </div>
          <div>
            <h3
              className="setting-and-privacy-text"
              onClick={() => navigate("/setting-and-privacy")}
            >
              Settings and privacy
            </h3>
            <h3 className="setting-and-privacy-text">Help Center</h3>
          </div>
          <div className="bottom-icon-div">
            <BulbSvg />
            <QRCodeSvg />
          </div>
        </div>
      </Toogle>
      {toogle ? <BgBlur onClick={() => setToogle(false)} /> : ""}
    </>
  );
};
export default NavBar;
