import React, { useState } from "react";
import { Header, ListTab } from "./style";
import { LeftArrowSvg } from "../assets/svg";
import { act } from "react-dom/test-utils";
import SubscribedTo from "./subscribed-to";
import MemberOf from "./member-of";
import AddListBtn from "../layout/add-list-btn";
import FooterNav from "../layout/footerNav";
import { useNavigate } from "react-router-dom";
import NavBar from "../layout/responsive-navbar";

const TwitterList = () => {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  return (
    <>
    <NavBar />
        <ListTab>
          <div
            className={active === 0 ? "active-tab" : "disable-tab"}
            onClick={() => setActive(0)}
          >
            <h3>Subscribed to</h3>
          </div>
          <div
            className={active === 1 ? "active-tab" : "disable-tab"}
            onClick={() => setActive(1)}
          >
            <h3>Member of</h3>
          </div>
        </ListTab>
      {active === 0 && <SubscribedTo />}
      {active === 1 && <MemberOf />}
      <AddListBtn />
      <FooterNav />
    </>
  );
};
export default TwitterList;
