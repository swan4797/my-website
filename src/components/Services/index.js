import React from "react";
import Icon1 from "../../images/img1.png";
import Icon2 from "../../images/img2.png";
import Icon3 from "../../images/img3.png";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="portfolio">
      <ServicesH1>Portfolio</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Project 1</ServicesH2>
          <ServicesP>REACT REDUX MERN</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Project 2</ServicesH2>
          <ServicesP>REACT REDUX MERN</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Project 3</ServicesH2>
          <ServicesP>REACT REDUX MERN</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
