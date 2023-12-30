import React from "react";
import { Container, Wrapper, Header, Block, Box, Box1 } from "./style";
import { ArrowSolidSvg, CrossSvg } from "../assets/svg";
import { useNavigate } from "react-router-dom";

const SearchTwitter = () => {
  const navigate = useNavigate();
  const data = [
    {
      image: "./media/Round4.svg",
      name: "Sab Khasa",
      title: "@s_khasan",
    },
    {
      image: "/media/Round5.svg",
      name: "Martha Cr",
      title: "@craig_love",
    },
    {
      image: "/media/Round6.svg",
      name: "Tibitha P",
      title: "@mis_potter",
    },
    {
      image: "/media/Round7.svg",
      name: "Figma",
      title: "@figmadesi",
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
      <Header>
        <input type="text" placeholder="Search Twitter" />
        <h1 onClick={()=> navigate('/trends')}>Cancel</h1>
      </Header>
      <Block>
        <div>
          <h1>Recent Search</h1>
          <button>
            <CrossSvg />
          </button>
        </div>
      </Block>
      <Box>
        {data?.map((item, index) => (
          <Container key={index}>
            <div className="main-div">
              {/* <div className="left"> */}
              <img src={item.image} alt="image" />
              {/* </div> */}
              {/* <div className="right"> */}
              <p className="name">{item.name}</p>
              {/* </div> */}
              <p>{item.title}</p>
            </div>
          </Container>
        ))}
      </Box>
      <Box1>
        <p>skhasanov</p>
        <ArrowSolidSvg />
      </Box1>
    </Wrapper>
  );
};
export default SearchTwitter;
