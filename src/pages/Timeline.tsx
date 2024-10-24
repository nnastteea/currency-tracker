import React from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import LastUpdate from "../components/LastUpdate";
import SelectCurrency from "../components/SelectCurrency";
import TimelineChart from "../components/TimelineChart";
import * as S from "../GlobalStyles";

class Timeline extends React.Component {
  render() {
    return (
      <>
        <S.GlobalStyle />
        <Header />
        <LastUpdate />
        <SelectCurrency />
        <TimelineChart />
        <Footer />
      </>
    );
  }
}

export default Timeline;
