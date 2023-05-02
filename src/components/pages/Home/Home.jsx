import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Banner/Banner";
import Chef from "../Chef/Chef";
import ExtraSectionOne from "../ExtraSectionOne/ExtraSectionOne";
import ExtraSectionTwo from "../ExtraSectionTwo/ExtraSectionTwo";

const Home = () => {
  return (
    <Container className="my-5">
      <div className="my-5">
        <Banner></Banner>
      </div>
      <div className="my-5">
        <Chef></Chef>
      </div>
      <div className="my-5">
        <ExtraSectionOne></ExtraSectionOne>
      </div>
      <div className="my-5">
        <ExtraSectionTwo></ExtraSectionTwo>
      </div>
      
    </Container>
  );
};

export default Home;
