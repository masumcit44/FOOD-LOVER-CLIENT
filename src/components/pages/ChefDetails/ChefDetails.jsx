import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import "./ChefDetails.css";
import { FaThumbsUp } from "react-icons/fa";
import { Button, Container } from "react-bootstrap";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaBookmark } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "react-bootstrap/Spinner";
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
  console.log(recipe);
  const notify = () => toast("Added to your favourite list");
  if (loading) {
    return <Spinner animation="border" className="ms-5" variant="primary" />;
  }
  return (
    <Container className="my-5">
      <div className="chef-banner d-flex gap-5 my-3">
        <img className="chef-photo rounded " src={chef.photo} alt="" />
        <div className="chef-details  ">
          <p className="mb-0 normal-text">Hi , I am</p>
          <h4 className="chef-name">{chef.name}</h4>
          <p>{chef.bio}</p>
          <div className="d-flex gap-2">
            <FaThumbsUp className="fs-5  text-primary"></FaThumbsUp>
            <p className="text-danger">{chef.likes}</p>
          </div>

          <p>Years of experience : {chef.years_of_experience} </p>
          <p>Numbers of recipes : {chef.num_recipes} </p>
        </div>
      </div>
      <div>
        <div>
          <div>
            <h4 className="text-center">Food Of The Month</h4>

            <div className="d-flex  gap-5 justify-content-center ">
              {recipe.map((food, index) => (
                <div className=" food-card card h-100  rounded-5  " key={index}>
                  <div className="card-body">
                    <img
                      className="food-image p-4 rounded-5 w-100 "
                      src={food.photo}
                      alt=""
                    />
                    <div className="p-4 ">
                      <div className="">
                        <h4>{food.name}</h4>
                        <h4>Cooking Method:</h4>
                        <p>{food.cookingMethod}</p>
                        <div>
                          <h4> Ingredients:</h4>
                          <div className="ps-3">
                            {food.ingredients.map((ingredient) => (
                              <li>{ingredient}</li>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4>Rating:</h4>
                          <div className="d-flex align-items-center justify-content-between">
                            <Rating
                              disabled
                              style={{ maxWidth: 180 }}
                              value={food.rating}
                              readOnly
                            />
                            <ToastContainer
                              position="top-right"
                              autoClose={5000}
                              hideProgressBar={false}
                              newestOnTop={false}
                              closeOnClick
                              rtl={false}
                              pauseOnFocusLoss
                              draggable
                              pauseOnHover
                              theme="colored"
                            />
                            <Button onClick={notify} variant="">
                              <FaBookmark className="text-primary fs-4"></FaBookmark>
                              <ToastContainer />
                            </Button>
                            <ToastContainer />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ChefDetails;
