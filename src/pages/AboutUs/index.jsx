import React from "react";
import MainLayout from "../../components/MainLayout";
import PageHeader from "../../sharedComponent/PageHeader";
import { ContactUsImages } from "../../constants/images";
import ReasonChooseUs from "../../components/aboutUs/ReasonChooseUs";
import Welcome from "../../components/aboutUs/Welcome";
import HelpClient from "../../components/aboutUs/HelpClient";
import CTA from "../../pages/home/container/CTA";
import OurTeam from "../../components/aboutUs/OurTeam";

const AbouttUs = () => {
  return (
    <div>
      <MainLayout>
        <PageHeader
          from="Home"
          to="About"
          MainName="About Us"
          backgroundImage={ContactUsImages?.ContactUsHeaderImage}
        />
        <Welcome />
        <HelpClient />
        <ReasonChooseUs />
        <OurTeam/>
        <CTA />
      </MainLayout>
    </div>
  );
};

export default AbouttUs;
