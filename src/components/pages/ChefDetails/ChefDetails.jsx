import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import "./ChefDetails.css";
import { FaThumbsUp } from "react-icons/fa";

import LazyLoad from "react-lazy-load";
import Spinner from "react-bootstrap/Spinner";
import ChefSelected from "../ChefSelected/ChefSelected";
import { Container } from "react-bootstrap";
const ChefDetails = () => {
  const chef = useLoaderData();
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://food-lover-react-assignment-server.vercel.app/receipe/${id}`)
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
        <LazyLoad offset={300}>
          <img className="chef-photo  " src={chef.photo} alt="" />
        </LazyLoad>
        <div className="chef-details  ">
          <p className="mb-0 normal-text">Hi , I am</p>
          <h4 className="chef-detail-name">{chef.name}</h4>
          <p className="">{chef.bio}</p>
          <div className="d-flex gap-2 align-items-center ">
            <p className="like-text">
              <span>Total</span>{" "}
              <span className="text-warning">{chef.likes}</span>{" "}
              <span>Likes</span>
            </p>
          </div>

          <p>
            Numbers of recipes :{" "}
            <span className="text-warning">{chef.num_recipes}</span>{" "}
          </p>
          <p>
            Years of experience :{" "}
            <span className="text-warning">{chef.years_of_experience}</span>
          </p>
        </div>
      </div>
      <div>
        <div>
          <div>
            <h4 className="text-center banner-header shake">
              Chef selected <span className="lover-color">food receipe</span>
            </h4>

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
