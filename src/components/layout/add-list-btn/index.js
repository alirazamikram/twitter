import React from "react";
import { Wrapper } from "./style";
import { useNavigate } from "react-router-dom";

const AddListBtn = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <button className="tweeting-btn"></button>
    </Wrapper>
  );
};
export default AddListBtn;
