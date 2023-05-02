import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <Container className="my-5">
      <div className="my-5">
        <Banner></Banner>
      </div>
    </Container>
  );
};

export default Home;
