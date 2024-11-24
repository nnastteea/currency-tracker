import React from "react";

import ContactLinks from "../components/ContactLinks";
import Footer from "../components/Footer";
import Header from "../components/Header";
import * as S from "../GlobalStyles";

function Contact() {
  return (
    <>
      <S.GlobalStyle />
      <Header />
      <ContactLinks />
      <Footer />
    </>
  );
}

export default Contact;
