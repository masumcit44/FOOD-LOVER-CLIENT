import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import "./ChefDetails.css";
import { FaThumbsUp } from "react-icons/fa";

import Spinner from "react-bootstrap/Spinner";
import ChefSelected from "../ChefSelected/ChefSelected";
import { Container } from "react-bootstrap";
const ChefDetails = () => {
  const chef = useLoaderData();
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:3000/receipe/${id}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data.recipes));
    setLoading(false);
  }, []);

  if (loading) {
    return <Spinner animation="border" className="ml-5" variant="primary" />;
  }
  return (
    <Container className="my-5">
      <div className="chef-banner d-flex gap-5 my-3">
        <img className="chef-photo  " src={chef.photo} alt="" />

        <div className="chef-details  ">
          <p className="mb-0 normal-text">Hi , I am</p>
          <h4 className="chef-name">{chef.name}</h4>
          <p>{chef.bio}</p>
          <div className="d-flex gap-2">
            <FaThumbsUp className="fs-5  text-primary"></FaThumbsUp>
            <p className="text-danger">{chef.likes}</p>
          </div>

          <p>Numbers of recipes : {chef.num_recipes} </p>
          <p>Years of experience : {chef.years_of_experience} </p>
        </div>
      </div>
      <div>
        <div>
          <div>
            <h4 className="text-center">Chef selected food receipe</h4>

            <div className="d-md-flex  gap-5 justify-content-center ">
              {recipe.map((food, index) => (
                <ChefSelected food={food} key={index}></ChefSelected>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ChefDetails;
