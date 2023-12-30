import React from "react";
import { SettingBox, GenerelBox, PixelBox, Wrapper } from "./style";
import Navbar from "../layout/responsive-navbar";
import { RightArrowSvg } from "../assets/svg";

const SettingAndPrivacy = () => {
  const data = [
    {
      title: "Account",
      rightArrow: <RightArrowSvg />,
    },
    {
      title: "Privacy and safety",
      rightArrow: <RightArrowSvg />,
    },
    {
      title: "Notifications",
      rightArrow: <RightArrowSvg />,
    },
    {
      title: "Content preferences",
      rightArrow: <RightArrowSvg />,
    },
  ];
  const genereldata = [
    {
      title: "Display and sound",
      rightArrow: <RightArrowSvg />,
    },
    {
      title: "Data usage",
      rightArrow: <RightArrowSvg />,
    },
    {
      title: "Accessibility",
      rightArrow: <RightArrowSvg />,
    },
    {
      title: "About Twitter",
      rightArrow: <RightArrowSvg />,
    },
  ];
  return (
    <Wrapper>
      <Navbar />
      <PixelBox>
        <h1 className="pixsellez-text">@pixsellz</h1>
      </PixelBox>
      {data.map((item, index) => {
        const { title, rightArrow } = item;
        return (
          <SettingBox key={index}>
            <h1 className="account-text">{title}</h1>
            {rightArrow}
          </SettingBox>
        );
      })}
      <GenerelBox>
        <h1 className="pixsellez-text">General</h1>
      </GenerelBox>

      {genereldata.map((item, index) => {
        const { title, rightArrow } = item;
        return (
          <SettingBox key={index}>
            <h1 className="account-text">{title}</h1>
            {rightArrow}
          </SettingBox>
        );
      })}
      <div className="text-div">
        <p className="bottom-text">
          General settings affect all of your Twitter accounts on this device.
        </p>
      </div>
    </Wrapper>
  );
};
export default SettingAndPrivacy;
