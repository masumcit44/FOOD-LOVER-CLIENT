import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import './ChefDetails.css'
import { FaThumbsUp } from "react-icons/fa";
import { Container } from "react-bootstrap";

const ChefDetails = () => {
  const chef = useLoaderData();
  const { id } = useParams();
  console.log(chef, id);
  const [recipe, setRecipe] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/receipe/${id}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data.recipes));
  }, []);
  console.log(recipe);
  return (
    <Container>
      <div className="chef-banner d-flex gap-1">
        <img className="chef-photo" src={chef.photo} alt="" />
        <div className="chef-details  ">
          <h4>{chef.name}</h4>
          <p>{chef.bio}</p>
          <div className="d-flex gap-2">
            <FaThumbsUp className="fs-5  text-primary"></FaThumbsUp>
            <p className="text-danger">{chef.likes}</p>
          </div>

          <p>Years of experience : {chef.years_of_experience} </p>
          <p>Numbers of recipes : {chef.num_recipes} </p>
        </div>
      </div>
    </Container>
  );
};

export default ChefDetails;
