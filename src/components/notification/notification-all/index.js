import React from "react";
import { Wrapper, Header, Container } from "./style";
import { DownArrowSvg, StarSvg } from "../../assets/svg";

const NotificationAll = () => {
  const data = [
    {
      image: "images/round-profile.svg",
      title: "Saad Drusteer",
      des: "🔥 Are you using WordPress and migrating to the JAMstack? I wrote up a case study about how Smashing Magazine moved to JAMstack and saw great performance improvements and better security.",
      link: "smashingdrusteer.com/2020/01/migrat...",
      tags: "",
    },
    {
      image:"images/round-profile.svg",
      title: "UX Upper ",
      des: "Creating meaningful experiences: an Introduction to User Experience design >",
      link: "owww.ly/p0fx50y5CoO",
      tags: "#ux #uxdesign #uxresearch #userresearch #research #productdesing #webdesign #userexperience #startup #digital #design #diseno #psychology #servicedesign #conversion pic.twitter.com/wgpLcbkomN ",
    },
    {
      image: "images/round-profile.svg",
      title: "Teador van schneider",
      des: "I’m always surprised how few designers are also serious gamers. Curious why that",
      link: "",
      tags: "",
    },
    {
      image:"images/round-profile.svg",
      title: "UX Upper ",
      des: "Creating meaningful experiences: an Introduction to User Experience design >",
      link: "owww.ly/p0fx50y5CoO",
      tags: "#ux #uxdesign #uxresearch #userresearch #research #productdesing #webdesign #userexperience #startup #digital #design #diseno #psychology #servicedesign #conversion pic.twitter.com/wgpLcbkomN ",
    },
    {
      image: "images/round-profile.svg",
      title: "UX Upper ",
      des: "Creating meaningful experiences: an Introduction to User Experience design >",
      link: "owww.ly/p0fx50y5CoO",
      tags: "#ux #uxdesign #uxresearch #userresearch #research #productdesing #webdesign #userexperience #startup #digital #design #diseno #psychology #servicedesign #conversion pic.twitter.com/wgpLcbkomN ",
    },
  ];

  return (
    <>
      <Wrapper>
        {/* <Header>
          <img src="./media/Round.svg" alt="image" />
          <h1> Notifications </h1>
          <img src="./media/Settings Stroke Icon.svg" alt="image" />
        </Header> */}
        {data?.map((item, index) => (
          <Container  key={index}>
            <div className="left-div">
              <StarSvg />
            </div>
            <div className="right-div">
                <div className="inner-div">
              <img src={item.image} alt="image" />
              <DownArrowSvg />
              </div>
              <p>
                In case you missed <span>{item.title}</span>’s Tweet
              </p>
              <p>{item.des}</p>
              <p>{item.link}</p>
              <p>{item.tags}</p>
            </div>
          </Container>
        ))}
      </Wrapper>
    </>
  );
};
export default NotificationAll;
