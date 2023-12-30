import React from "react";
import {
  Wrapper,
  Container,
  SearchDiv,
  MiddDiv,
  Content,
} from "./style";
import FooterNav from "../layout/footerNav";
import TweetingBtn from '../layout/tweeting-btn'
import { TrendsNav } from "../layout/responsive-navbar/style";
import NavBar from "../layout/responsive-navbar";
const Trends = () => {
  return (
    <>
      <Wrapper>
      <NavBar />
        <Container>
          <MiddDiv>
            <h1>Trends for you</h1>
          </MiddDiv>
          <Content>
            <h1>No new trends for you</h1>
            <p>
              It seems like there's not a lot to show you right now, but you can
              see tredns for other areas
            </p>
            <button>Change location</button>
          </Content>
        </Container>
      </Wrapper>
      <TweetingBtn />
      <FooterNav />
    </>
  );
};
export default Trends;
