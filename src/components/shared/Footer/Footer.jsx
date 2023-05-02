import React from "react";
import { FaFacebook,FaInstagram , FaTwitter } from "react-icons/fa";

const Footer = () => {
  return ( 
    <div className="p-5 bg-light fw-bold mb-3">
      <div className="row">
        <h4 className="col-3 fw-bold fs-3 heading-style ">Food Lover</h4>
        <div className="col-3">
          <h4 className="fw-bold fs-3">Recent Articles</h4>
          <ul>
            <li>Healthy Fitness Meals</li>
            <li>Unhealthy habits</li>
            <li>Are Eggs Good For You?</li>
          </ul>
        </div>
        <div className="col-3">
          <h4 className="fw-bold fs-3">Recent Books</h4>
          <ul>
            <li>“Healthy Cooking Tips”</li>
            <li>“The Right Nutrition”</li>
            <li>“Fear of Food”</li>
          </ul>
        </div>
        <div className="col-3">
          <h4 className="fw-bold fs-3">Our Goal</h4>
          <p>We want help to learn about how to cook bengali yummy,healthy foods and want to introduce with some chefs</p>
        </div>
        
      </div>
      <div className="d-flex justify-content-between">
      <p className="fs-5">&copy; 2023 <span className="fw-bold">FoodLover</span>. All rights reserved.</p>
      <div className="fs-5 fw-bold d-flex align-items-center gap-3">
        <p>Follow us</p>
        <p className="d-flex gap-3 ">
            <FaFacebook className="text-primary d-inline"></FaFacebook>
            <FaInstagram className="text-danger"></FaInstagram>
            <FaTwitter className="text-info"></FaTwitter>
        </p>
      </div>
      </div>
    </div>
  );
};

export default Footer;
