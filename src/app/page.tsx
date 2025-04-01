import Image from "next/image";
import HeroPage from "./components/heroPage";
import OffersComp from "./components/offers";
import WhoWeAre from "./components/weAre";
import WhatWeDo from "./components/wedo";
import Solution from "./components/solu";
import RecentWorks from "./components/recent";
import NumberCount from "./components/numberCount";
import WhyChooseUs from "./components/whyChoose";
import ContactUs from "./components/contact";

export default function Home() {
  return (
    <div className="">
      <HeroPage />
      <OffersComp />
      <WhoWeAre />
      <WhatWeDo />
      <Solution />
      <RecentWorks />
      <NumberCount />
      <WhyChooseUs />
      <ContactUs />
    </div>
  );
}
