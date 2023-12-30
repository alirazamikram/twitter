import React from "react";
import { Wrapper } from "./style";
import { useNavigate } from "react-router-dom";

const NewMesasgeBtn = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <button
        className="tweeting-btn"
        onClick={() => navigate("/new-message")}
      ></button>
    </Wrapper>
  );
};
export default NewMesasgeBtn;
