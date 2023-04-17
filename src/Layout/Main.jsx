import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
};

export default Main;
