import React from "react";
import { Container, Wrapper, Header, Bottom } from "./style";
import { useNavigate } from "react-router-dom";
import FooterNav from "../layout/footerNav";
import TweetingBtn from "../layout/tweeting-btn";
import NewMesasgeBtn from "../layout/new-message-btn";
import NavBar from "../layout/responsive-navbar";

const Message = () => {
  const navigate = useNavigate();
  const data = [
    {
      image: "./media/Round4.svg",
      name: "AzizDjan",
      title: "@A_AzizDjan",
      des: "You: You’re very welcome AzizDjan!",
      date: "12/2/19",
    },
    {
      image: "/media/Round5.svg",
      name: "Andrew Parker",
      title: "@andrewww_",
      des: "You accepted the request",
      date: "12/1/19",
    },
    {
      image: "/media/Round6.svg",
      name: "Komol Kuchkarov",
      title: "@kkuchkarov",
      des: "You accepted the request",
      date: "12/1/19",
    },
    {
      image: "/media/Round7.svg",
      name: "karennne",
      title: "@karennne",
      des: "You: I would greatly appreciate if you could retweet this if you think its worthy :)",
      date: "6/26/19",
    },
    {
      image: "/media/Round8.svg",
      name: "Maximillian",
      title: "@maxjacobson",
      des: "sent you a link: Hello Pixsellz,",
      date: "5/22/19",
    },
    {
      image: "/media/Round9.svg",
      name: "Martha Craig",
      title: "@craig_love",
      des: "You: Just started 5 months ago",
      date: "12/2/19",
    },
    {
      image: "/media/Round10.svg",
      name: "Martin Randolph",
      title: "@martini_rond",
      des: "You accepted the request",
      date: "3/7/19",
    },
    {
      image: "/media/Round11.svg",
      name: "Kieron Dotson",
      title: "@kiero_d",
      des: "You: Hi Kiero, let me see what I can do gfor you. I will get back to you soon. Our ",
      date: "12/2/19",
    },
  ];
  return (
    <Wrapper>
    <NavBar />
      <div className="input-div">
        <input type="text" placeholder="Search for people and groups" />
      </div>
      <Bottom>
        {data?.map((item, index) => (
          <Container key={index}>
            <div className="main-div">
              <div className="left">
                <img src={item.image} alt="image" />
              </div>
              <div className="middle">
                <p>
                  <span>{item.name} </span>
                  {item.title}
                </p>
                <p>{item.des}</p>
              </div>
              <div className="right">
                <p className="date">{item.date}</p>
              </div>
            </div>
          </Container>
        ))}
      </Bottom>
      <NewMesasgeBtn />
      <FooterNav />
    </Wrapper>
  );
};
export default Message;
