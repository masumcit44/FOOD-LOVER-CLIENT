import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

import Spinner from "react-bootstrap/Spinner";
import "./Banner.css";
const Banner = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://food-lover-react-assignment-server.vercel.app/receipe/1")
      .then((res) => res.json())
      .then((data) => setRecipes(data.recipes));
    setLoading(false);
  }, []);
  if (loading) {
    return <Spinner animation="border" className="ml-5" variant="primary" />;
  }
  return (
    <div className="">
      <div className="row gap-2">
      <div className="col-md-5">
        <h1 className="banner-header shake  ">
          Let us share some exciting <span className="text-info shake ">food receipe</span> with you
        </h1>
        <Button className="banner-btn px-5 py-3" variant="">Get Started</Button>
      </div>
      <div className="col-md-6 border-0">
      <Carousel

        slide={true}
        interval={1000}
        className=" border-0 "
        controls={false}
        indicators={false}
      >
        {recipes.map((recipe, index) => (
          <Carousel.Item className="" key={index}>
            <img
              className="d-block rounded carousel-img  sharp-image"
              src={recipe.photo}
              alt={recipe.name}
            />
            <Carousel.Caption>
              <h3 className=" carousel-caption">{recipe.name}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      </div>
    </div>
    </div>
    
  );
};

export default Banner;
