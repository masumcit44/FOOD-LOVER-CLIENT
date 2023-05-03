import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { Button, Container } from "react-bootstrap";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import "react-toastify/dist/ReactToastify.css";
import './ChefSelected.css'
const ChefSelected = ({ food }) => {
  const [click, setClick] = useState(true);
  const notify = () => toast("Added to your favourite list");
  return (
    <div className=" food-card card mt-2  rounded-5  ">
      <div className="card-body  ">
        <img
          className="food-image  rounded-5 w-100 "
          src={food.photo}
          alt=""
        />

          <div className="mt-2 food-details ">
            <h4 className="lover-color">{food.name}</h4>
            <div>
              <h4 className="text-info"> Ingredients:</h4>
              <div className="ps-3 food-details-small">
                {food.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </div>
            <h4 className="text-info">Cooking Method:</h4>
            <p className="food-details-small">{food.cookingMethod}</p>

            <div className="">
              <h4 className="text-info">Rating:</h4>
              <div className="d-flex align-items-center justify-content-between">
                <Rating
                  disabled
                  style={{ maxWidth: 160 }}
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
