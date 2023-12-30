import React, { useState,useEffect } from "react";
import GlobalContext from "./context";
import Navbar from "./responsive-navbar";
import FooterNav from "./footerNav";

const Layout = ({Children}) => {
  
  return (
    <GlobalContext.Provider value={'my name is aliraza'}>
      <Navbar />
      {Children}
      <FooterNav />
    </GlobalContext.Provider>
  );
};
export default Layout;
