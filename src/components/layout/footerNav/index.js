import React, { useState } from "react";
import { NavWrapper } from "./style";
import { BellSvg, HomeSvg, MessageSvg, SearchSvg } from "../../assets/svg";
import { NavLink, useNavigate } from "react-router-dom";

const FooterNav = () => {
  return (
    <NavWrapper>
      <NavLink to="/" className="icon-color">
        <HomeSvg />
      </NavLink>
      <NavLink to="/trends" className="icon-color">
        <SearchSvg />
      </NavLink>
      <NavLink to="/notification" className="icon-color">
        <BellSvg />
      </NavLink>
      <NavLink  to='/messages' className="icon-color">
        <MessageSvg />
      </NavLink>
    </NavWrapper>
  );
};
export default FooterNav;
