import React from "react";
import { Wrapper } from "./style";
import { useNavigate } from "react-router-dom";

const TweetingBtn = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <button className="tweeting-btn" onClick={()=> navigate('/twitter-tweeting')}></button>
    </Wrapper>
  );
};
export default TweetingBtn;
