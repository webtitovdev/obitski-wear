import React from "react";

import BreadCrumbs from "../components/breadCrumbs/BreadCrumbs";
import ContactForm from "../components/contactForm/ContactForm";
import ContactInfo from "../components/contactInfo/ContactInfo";

const Contact = () => {
  return (
    <>
      <BreadCrumbs />
      <ContactForm />
      <ContactInfo />
    </>
  );
};

export default Contact;
