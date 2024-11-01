import React from "react";

import Footer from "../components/Footer";
import FormAndChart from "../components/FormAndChart";
import Header from "../components/Header";
import LastUpdate from "../components/LastUpdate";
import * as S from "../GlobalStyles";

class Timeline extends React.Component {
  render() {
    return (
      <>
        <S.GlobalStyle />
        <Header />
        <LastUpdate />
        <FormAndChart />
        <Footer />
      </>
    );
  }
}

export default Timeline;
