import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Banner/Banner";
import Chef from "../Chef/Chef";
import ExtraSectionOne from "../ExtraSectionOne/ExtraSectionOne";

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
      
    </Container>
  );
};

export default Home;
