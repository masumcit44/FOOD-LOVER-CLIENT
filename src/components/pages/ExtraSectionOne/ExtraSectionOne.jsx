import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import "./ExtraSectionOne.css";
const ExtraSectionOne = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/food")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  console.log(recipes);
  return (
    <div>
      <h4 className="text-center">Food Of The Month</h4>

      <div className="d-flex gap-5 justify-content-center ">
        {recipes.map((food, index) => (
          <div className=" food-card  rounded-5  " key={index}>
            <div className="">
              <img className="food-image p-4 rounded-5 " src={food.image} alt="" />
              <div className="p-4 card-body">
                <h4>{food.name}</h4>
                <div className="d-flex ga justify-content-between">
                  <p>foodcost: ${food.foodcost}</p>
                  <Button variant="danger">View Receipe</Button>
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
