import React from "react";
import {
  Container,
  Wrapper,
  Header,
  SecondDiv,
  Main,
  Firstblock,
  Content,
  ThirdDiv,
  FourthDiv,
  BottomDiv,
  FirstDiv,
} from "./style";
import { ActivityIconSvg, DownArrowSvg, LeftArrowSvg } from "../assets/svg";
import FooterNav from "../layout/footerNav";
import NavBar from "../layout/responsive-navbar";

const TweetOfMine = () => {
  return (
    <Wrapper>
      <NavBar />
      <Container>
        <Firstblock>
          <div className="left-div">
            <img src="./images/logo.svg" />
          </div>
          <div className="middle-div">
            <h1>Pixsellz </h1>
            <h2>@pixsellz</h2>
          </div>
          <div className="right-div">
            <DownArrowSvg />
          </div>
        </Firstblock>
        <Main>
          <FirstDiv>
            <p>Must have icon collections</p>
          </FirstDiv>
          <Content>
            <div className="left-div">
              <img src="./images/icons-rectangle.svg" />
            </div>
            <div className="right-div">
              <div className="upper-div">
                <h1 className="text">
                  The Best Free Icon Packs Everyone <br /> Must Download in 2020
                  | GraphicM can add more
                </h1>
              </div>
              <div className="lower-div">
                <p className="caption">graphicmama.com</p>
              </div>
            </div>
          </Content>
          <SecondDiv>
            <p>
              17:18 · 2/14/20 · <a href="">Twitter Web App</a>
            </p>
          </SecondDiv>
          <ThirdDiv>
            <ActivityIconSvg />
            <p>View Tweet activity</p>
          </ThirdDiv>
          <ThirdDiv>
            <p>
              <span>1 </span> Like
            </p>
          </ThirdDiv>
          <FourthDiv>
            <img src="images/comment.svg" alt="comment" />
            <img src="images/retweet.svg" alt="comment" />
            <img src="images/like-heart.svg" alt="comment" />
            <img src="images/share.svg" alt="comment" />
          </FourthDiv>
        </Main>
      </Container>
      <BottomDiv>
        <img src="./media/Round.svg" alt="image" />
        <input type="text" placeholder="Add another Tweet"></input>
      </BottomDiv>
      <FooterNav />
    </Wrapper>
  );
};

export default TweetOfMine;
