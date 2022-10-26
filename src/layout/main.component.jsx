import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/footer.component";
import Header from "../components/header/header.component";

const Main = () => {
  return (
    <>
      <Header />
      <div className="max-w-screen-xl mx-auto px-2">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;
