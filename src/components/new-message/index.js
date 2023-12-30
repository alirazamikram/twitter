import React from "react";
import { Container, Wrapper, Header } from "./style";
import { useNavigate } from "react-router-dom";
import NavBar from "../layout/responsive-navbar";

const NewMessages = () => {
  const navigate = useNavigate();
  const data = [
    {
      image: "./media/Round4.svg",
      name: "AzizDjan",
      title: "@A_AzizDjan",
    },
    {
      image: "/media/Round5.svg",
      name: "Andrew Parker",
      title: "@andrewww_",
    },
    {
      image: "/media/Round6.svg",
      name: "Komol Kuchkarov",
      title: "@kkuchkarov",
    },
    {
      image: "/media/Round7.svg",
      name: "karennne",
      title: "@karennne",
    },
    {
      image: "/media/Round8.svg",
      name: "Maximillian",
      title: "@maxjacobson",
    },
    {
      image: "/media/Round9.svg",
      name: "Martha Craig",
      title: "@craig_love",
      des: "You: Just started 5 months ago",
    },
    {
      image: "/media/Round10.svg",
      name: "Martin Randolph",
      title: "@martini_rond",
    },
    {
      image: "/media/Round11.svg",
      name: "Kieron Dotson",
      title: "@kiero_d",
    },
  ];

  return (
    <Wrapper>
    <NavBar />
    <div className="lower-div">
          <input type="text" placeholder="Search for people and groups" />
        </div>
      {data?.map((item, index) => (
        <Container key={index}>
          <div className="main-div">
            <div className="left">
              <img src={item.image} alt="image" />
            </div>
            <div className="right">
              <p className="name">{item.name}</p>
              <p>{item.title}</p>
            </div>
          </div>
        </Container>
      ))}
    </Wrapper>
  );
};
export default NewMessages;
