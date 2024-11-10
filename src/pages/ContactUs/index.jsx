import React from "react";
import MainLayout from "../../components/MainLayout";
import ContactForm from "../../components/contactUs/ContactUsForm";
import ContactInfo from "../../components/contactUs/ContactInfo";
import PageHeader from "../../sharedComponent/PageHeader";
import { ContactUsImages } from "../../constants/images";
import CTA from "../home/container/CTA";

const ContactUs = () => {
  return (
    <div>
      <MainLayout>
        <PageHeader
          from="Home"
          to="Contact"
          MainName="Contact Us"
          backgroundImage={ContactUsImages?.ContactUsHeaderImage}
        />
        <ContactInfo />
        <ContactForm />
        <CTA/>
      </MainLayout>
    </div>
  );
};

export default ContactUs;
