import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import "./ExtraSectionOne.css";

import Spinner from "react-bootstrap/Spinner";
const ExtraSectionOne = () => {
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("https://food-lover-react-assignment-server.vercel.app/food")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
      setLoading(false)
  }, []);
  if (loading) {
    return <Spinner animation="border" className="ml-5" variant="primary" />;
  }
  return (
    <div>
      <h4 className="text-center chef-header">Food Of <span className="text-info">The Month</span></h4>

      <div className="d-md-flex gap-5 justify-content-center ">
        {recipes.map((food, index) => (
          <div className=" food-card  rounded-5  " key={index}>
            <div className="">
              <img
                className="food-image p-4 rounded-5 "
                src={food.image}
                alt=""
              />
              <div className="p-4 card-body">
                <h4 className="chef-name">{food.name}</h4>
                <div className="d-md-flex gap-2 align-items-center justify-content-between chef-description">
                  <p>foodcost: ${food.foodcost}</p>
                  <button type="button" class="btn btn-outline-info ">Receipe</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtraSectionOne;
