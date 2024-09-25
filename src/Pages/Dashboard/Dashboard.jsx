import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "../../Component/SideBar/SideBar";
import { Header } from "../../Component/Header/Header";
import { PromoSection } from "../../Component/Dashboard/Promotion";
import { ProductSection } from "./Production";

// Dummy images

const Dashboard = () => {
  return (
    <>
      {/* <div className="flex-1 overflow-y-auto bg-[#EFEFEF] px-8 pb-8"> */}
      <Header />
      <PromoSection />
      <ProductSection />
      {/* </div> */}
    </>
  );
};

export default Dashboard;
