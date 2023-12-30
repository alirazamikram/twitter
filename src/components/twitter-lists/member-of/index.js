import { React, useState } from "react";
import { Wrapper, Header, ListTab, ListBox, Bottom } from "./style";
import { LeftArrowSvg } from "../../assets/svg";
import FooterNav from "../../layout/footerNav";
const MemberOf = () => {
  const data = [
    {
      id: 1,
      name: "Joshua Lawrence",
      bio: "D-teams",
      system: "systems",
      count: "277",
      member: "members",
    },
    {
      id: 2,
      name: "Pixsellz Team",
      bio: "D-teams",
      system: "systems",
      count: "24",
      member: "members",
    },
    {
      id: 3,
      name: "Pixsellz Team",
      bio: "D-teams",
      system: "systems",
      count: "20",
      member: "members",
    },
    {
      id: 4,
      name: "Pixsellz Team",
      bio: "D-teams",
      system: "systems",
      count: "15",
      member: "members",
    },
  ];
  const [active, setActive] = useState(0);
  return (
    <Wrapper>
      <Bottom>
        {data.map((item, index) => {
          const { name, bio, system, count, member } = item;
          return (
            <ListBox key={index}>
              <div className="left">
                <h3 className="list-name">{name}</h3>
                <h3 className="list-bio">{bio}</h3>
                <p className="system-text">{system}</p>
                <div className="list-count-div">
                  <p className="list-count">{count}</p>
                  <p className="list-count-member">{member}</p>
                </div>
              </div>
              <div className="right">
                <img
                  src="images/woman-profile.svg"
                  alt="profile"
                  className="img"
                />
              </div>
            </ListBox>
          );
        })}
      </Bottom>
    </Wrapper>
  );
};

export default MemberOf;
