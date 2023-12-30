import React, { useState } from "react";
import { Bottom, Header, ListTab, Wrapper } from "./style";
import { LeftArrowSvg } from "../../assets/svg";

const SubscribedTo = () => {
  const [active, setActive] = useState(0);
  return (
    <Wrapper>
      <h3 className="list-heading">
        You haven’t created or <br />
        subscribed to any Lists
      </h3>
      <p className="list-description">When you do, it’ll show up here.</p>
      <button className="create-list-btn">Create a List</button>
    </Wrapper>
  );
};

export default SubscribedTo;
