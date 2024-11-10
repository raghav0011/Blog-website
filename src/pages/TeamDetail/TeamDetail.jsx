import React from "react";
import MainLayout from "../../components/MainLayout";
import PageHeader from "../../sharedComponent/PageHeader";
import { ContactUsImages } from "../../constants/images";
import CTA from "../../pages/home/container/CTA";
import TeamDetailsInfo from "../../components/aboutUs/TeamDetailsComponent";

const TeamDetail = () => {
  return (
    <div>
      <MainLayout>
        <PageHeader
          from="Home"
          to="Team"
          MainName="Our Dream Team"
          backgroundImage={ContactUsImages?.ContactUsHeaderImage}
        />
        <TeamDetailsInfo />
        <CTA />
      </MainLayout>
    </div>
  );
};

export default TeamDetail;
