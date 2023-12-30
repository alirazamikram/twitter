import React from "react";
import { Wrapper, Container, Header } from "./style";
import { useNavigate } from "react-router-dom";
import NavBar from "../layout/responsive-navbar";

const MessagesSettings = () => {
  const navigate = useNavigate();
  const data = [
    {
      title: "Receive messages from anyone",
      des: "You will be able to receive Direct Message requests from anyone on Twitter, even if you don’t follow them.",
    },
    {
      title: "Quality filter",
      des: "Filters lower-quality messages from your Direct Message requests.",
    },
    {
      title: "Show read receipts",
      des: "When someone sends you a message, peopla in the conversation will know when you’ve seen it. If you turn off this setting, you won’t be able to see read receipts from others.",
    },
  ];
  return (
    <>
      <Wrapper>
      <NavBar />
          <div className="privacy-div">
            <h1 className="h1-privacy">Privacy</h1>
          </div>
        {data?.map((item, index) => (
          <Container key={index}>
            <div className="upper-div">
              <div className="left-div">
                <h1>{item.title}</h1>
              </div>
              <div className="right-div">
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
            <div className="lower-div">
              <p>
                {item.des}
                <a href="">Learn more</a>
              </p>
            </div>
          </Container>
        ))}
      </Wrapper>
    </>
  );
};

export default MessagesSettings;
