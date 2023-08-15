import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../comps/Header";
import Footer from "../comps/Footer";

export default function Layout({}) {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />
    </>
  );
}
