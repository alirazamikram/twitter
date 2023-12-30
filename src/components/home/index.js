import { React, useContext, useState } from "react";
import {
  BoxThree,
  BoxThreeLeft,
  BoxTwo,
  BoxTwoLeft,
  LeftSide,
  Navbar,
  ProfileBox,
  RightSide,
  Toogle,
  TopHeader,
  Wrapper,
} from "./style";
import FooterNav from "../layout/footerNav";
import NavBar from "../layout/responsive-navbar";
import {
  BookmarkSvg,
  BulbSvg,
  ListSvg,
  ManProfileSvg,
  MomentSvg,
  ProfileImgSvg,
  ProfileSvg,
  QRCodeSvg,
  SmallProfileSvg,
  TopicSvg,
  WomanProfileSvg,
} from "../assets/svg";
import TweetingBtn from "../layout/tweeting-btn";
import PopUpBtns from "../layout/pop-up";
import { LineSvg } from "../assets/svg";
import GlobalContext from "../layout/context";

const Home = () => {
  const data = [
    {
      id: 1,
      heart: "images/heart-icon.svg",
      profile: 'images/man-profile.svg',
      line: <LineSvg />,
      smallprofile: <SmallProfileSvg />,
      liked: "Kieron Dotson and Zack John liked",
      name: "Martha Craig",
      username: "@craig_love",
      time: "·12h",
      bio: (
        <>
          UXR/UX: You can only bring one item to a remote island to assist your
          research of native use of tools and usability. What do you bring?
          #TellMeAboutYou
        </>
      ),
      thread: "show in threads",
    },
    {
      id: 2,
      heart: "images/heart-icon.svg",
      profile: 'images/woman-profile.svg',
      liked: "Kieron Dotson and Zack John liked",
      name: "Martha Craig",
      username: "@craig_love",
      time: "·12h",
      bio: "Y’all ready for this next post?",
    },
    {
      id: 4,
      heart: "images/heart-icon.svg",
      profile: 'images/woman-profile.svg',
      liked: "Kieron Dotson and Zack John liked",
      name: "Martha Craig",
      username: "@craig_love",
      time: "·12h",
      bio: (
        <>
          Kobe’s passing is really sticking w/ me in a <br /> way I didn’t
          expect. <br />
          <br />
          He was an icon, the kind of person who <br />
          wouldn’t die this way. My wife compared it
          <br /> to Princess Di’s accident. <br />
          <br />
          But the end can happen for anyone at any <br />
          time, & I can’t help but think of anything <br /> else lately.
        </>
      ),
    },
  ];
  const Nav = useContext(GlobalContext)
  return (
    <>
      <NavBar />
      {/* <Navbar>
        <img src="images/logo.svg" alt="logo" onClick={() => setToogle(true)} />
        <img src="images/twitter.svg" alt="twitter" />
        <img src="images/star.svg" alt="starts" />
      </Navbar>
      <Toogle>
        <div className={toogle ? "show-toogle" : "hide-toogle"}>
          <div className="topbar">
            <img src="images/man-profile.svg" />
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
            <div className="profile-div">
              <ProfileSvg />
              <h3 className="profile-text">Profile</h3>
            </div>
            <div className="profile-div">
              <ListSvg />
              <h3 className="profile-text">Lists</h3>
            </div>
            <div className="profile-div">
              <TopicSvg />
              <h3 className="profile-text">Topics</h3>
            </div>
            <div className="profile-div">
              <BookmarkSvg />
              <h3 className="profile-text">Bookmarks</h3>
            </div>
            <div className="profile-div">
              <MomentSvg />
              <h3 className="profile-text">Moments</h3>
            </div>
          </div>
          <div>
            <h3 className="setting-and-privacy-text">Settings and privacy</h3>
            <h3 className="setting-and-privacy-text">Help Center</h3>
          </div>
          <div className="bottom-icon-div">
            <BulbSvg />
            <QRCodeSvg />
          </div>
        </div>
      </Toogle> */}
      <Wrapper>
        {data.map((item, index) => {
          const {profile,line,smallprofile,heart,liked,name,username,time,bio} = item;
          return (
            <ProfileBox key={index}>
              <LeftSide>
                {/* <img src={item.heart} alt="heart" className="heart-img" /> */}
                <img src={profile} />
                {line}
                {smallprofile}
              </LeftSide>
              <RightSide>
                <div className="heart-liked-div">
                  <img src={heart} alt="heart" className="heart-img" />
                  <p className="liked-text">{liked} </p>
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
                <PopUpBtns />
                {/* <div className="all-btn">
                  <div className="img-number-btn">
                    <img src="images/comment.svg" alt="comment" />
                    <p className="btn-number">10</p>
                  </div>
                  <div className="img-number-btn">
                    <img src="images/retweet.svg" alt="comment"   onClick={()=> setPopUp(true)}              />
                    <p className="btn-number">5</p>
                  </div>
                  <div className="img-number-btn">
                    <img src="images/like-heart.svg" alt="comment" />
                    <p className="btn-number">21</p>
                  </div>
                  <div className="img-number-btn">
                    <img src="images/share.svg" alt="comment" />
                  </div>
                </div> */}
                <p className="show-threads-text">{item.thread}</p>
              </RightSide>
            </ProfileBox>
          );
        })}

        {/* <BoxTwo>
        <BoxTwoLeft>
          <img src="images/heart-icon.svg" alt="heart" className="heart-img" />
          <img src="images/man-profile.svg" alt="profile" />
        </BoxTwoLeft>
        <RightSide>
          <p className="liked-text">Zack John liked</p>
          <div className="dropdown-both-div">
            <div className="name-username-div">
              <p className="profile-name">Maximmilian </p>
              <p className="username">@maxjacobson</p>
              <p className="time">·3h</p>
            </div>
            <div>
              <button className="dropdown-btn"></button>
            </div>
          </div>
          <p className="bio-text">Y’all ready for this next post?</p>
          <div className="all-btn">
            <div className="img-number-btn">
              <img src="images/comment.svg" alt="comment" />
              <p className="btn-number">10</p>
            </div>
            <div className="img-number-btn">
              <img src="images/retweet.svg" alt="comment" />
              <p className="btn-number">5</p>
            </div>
            <div className="img-number-btn">
              <img src="images/like-heart.svg" alt="comment" />
              <p className="btn-number">21</p>
            </div>
            <div className="img-number-btn">
              <img src="images/share.svg" alt="comment" />
            </div>
          </div>
        </RightSide>
      </BoxTwo>
      <BoxThree>
        <BoxThreeLeft>
          <img src="images/retweet.svg" alt="heart" className="heart-img" />
          <img src="images/woman-profile.svg" alt="profile" />
        </BoxThreeLeft>
        <RightSide>
          <p className="liked-text">Kieron Dotson Retweeted</p>
          <div className="dropdown-both-div">
            <div className="name-username-div">
              <p className="profile-name">Tabitha Potter</p>
              <p className="username">@mis_potter</p>
              <p className="time">·14h</p>
            </div>
            <div>
              <button className="dropdown-btn"></button>
            </div>
          </div>
          <p className="bio-text">
            Kobe’s passing is really sticking w/ me in a <br /> way I didn’t
            expect. <br />
            <br />
            He was an icon, the kind of person who <br />
            wouldn’t die this way. My wife compared it
            <br /> to Princess Di’s accident. <br />
            <br />
            But the end can happen for anyone at any <br />
            time, & I can’t help but think of anything <br /> else lately.
          </p>
          <div className="all-btn">
            <div className="img-number-btn">
              <img src="images/comment.svg" alt="comment" />
              <p className="btn-number">10</p>
            </div>
            <div className="img-number-btn">
              <img src="images/retweet.svg" alt="comment" />
              <p className="btn-number">5</p>
            </div>
            <div className="img-number-btn">
              <img src="images/like-heart.svg" alt="comment" />
              <p className="btn-number">21</p>
            </div>
            <div className="img-number-btn">
              <img src="images/share.svg" alt="comment" />
            </div>
          </div>
        </RightSide>
      </BoxThree> */}
        <TweetingBtn />
        <FooterNav />
        {/* <RetweetPopUp /> */}
      </Wrapper>
    </>
  );
};
export default Home;
