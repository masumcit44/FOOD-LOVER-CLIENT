import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { Button, Container } from "react-bootstrap";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import LazyLoad from "react-lazy-load";
import "react-toastify/dist/ReactToastify.css";
const ChefSelected = ({ food }) => {
  const [click, setClick] = useState(true);
  const notify = () => toast("Added to your favourite list");
  return (
    <div className=" food-card card  rounded-5  ">
      <div className="card-body ">
        <LazyLoad  offset={300}>
          <img
            className="food-image p-4 rounded-5 w-100 "
            src={food.photo}
            alt=""
          />
        </LazyLoad>
        <div className="p-4 ">
          <div className="">
            <h4>{food.name}</h4>
            <div>
              <h4> Ingredients:</h4>
              <div className="ps-3">
                {food.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </div>
            </div>
            <h4>Cooking Method:</h4>
            <p>{food.cookingMethod}</p>

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

                <Button
                  onClick={() => {
                    notify();
                    setClick(false);
                  }}
                  variant="primary"
                  className={click ? "d-block" : "d-hide"}
                  disabled={!click}
                >
                  Favorite
                  <FaHeart className="text-danger ms-2 fs-4"></FaHeart>
                  <ToastContainer />
                </Button>

                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefSelected;
