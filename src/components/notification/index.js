import React, { useState } from "react";
import { NotificationTab, Header } from "./style";
import { NavProfileSvg, SettingSvg } from "../assets/svg";
import NotificationAll from "./notification-all";
import NotiMention from "./notification-mentions";
import FooterNav from "../layout/footerNav";
import TweetingBtn from "../layout/tweeting-btn";
import NavBar from "../layout/responsive-navbar";

const Notification = () => {
  const [active, setActive] = useState(0);
  return (
    <div>
    <NavBar />
      <NotificationTab>
        <div
          className={active === 0 ? "active-tab" : "disable-tab"}
          onClick={() => setActive(0)}
        >
          <h3>All</h3>
        </div>
        <div
          className={active === 1 ? "active-tab" : "disable-tab"}
          onClick={() => setActive(1)}
        >
          <h3>Mention</h3>
        </div>
      </NotificationTab>
      {active === 0 && <NotificationAll />}
      {active === 1 && <NotiMention />}
      <TweetingBtn />
      <FooterNav />
    </div>
  );
};

export default Notification;
