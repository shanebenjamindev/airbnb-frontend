import React from "react";
import HomeCarousel from "../../components/HomeComponents/Home/HomeCarousel";
import HomeRoom from "../../components/HomeComponents/Home/HomeRoom";
import Menu from "../../components/HomeComponents/Home/Menu/Menu";

export default function Home() {
  return (
    <div className="">
      <HomeCarousel />
      <HomeRoom />
      <Menu />
    </div>
  );
}
