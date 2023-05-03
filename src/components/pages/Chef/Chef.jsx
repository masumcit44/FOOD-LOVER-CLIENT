import React, { useEffect } from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Chef.css";
import { FaThumbsUp } from "react-icons/fa";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Pagination } from "swiper";
import Spinner from "react-bootstrap/Spinner";
const Chef = () => {
  const [loading, setLoading] = useState(true);
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/chef")
      .then((res) => res.json())
      .then((data) => setChefs(data));
    setLoading(false);
  }, []);
  if (loading) {
    return <Spinner animation="border" className="ml-5" variant="primary" />;
  }
  return (
    <div>
      <h4>This is chef</h4>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper swipe--main px-4 py-5 "
      >
        {chefs.map((chef) => (
          <SwiperSlide
            className="border border-2 p-3 rounded  swipe-card "
            key={chef.id}
          >
            
              <img
                className="rounded w-100 chef-image"
                src={chef.photo}
                alt=""
                height="300"
                width="250"
              />
           
            <div className="chef-description">
              <h4 className=" chef-name">{chef.name}</h4>
              <p>Years of experience : {chef.years_of_experience} </p>
              <p>Numbers of recipes : {chef.num_recipes} </p>
            </div>
            <div className="d-flex justify-content-between ">
              <div className="d-flex gap-2">
                <FaThumbsUp className="fs-5  text-primary"></FaThumbsUp>
                <p className="text-danger">{chef.likes}</p>
              </div>
              <Link to={`/chef/${chef.id}`}>
                <Button variant="warning">View Recipes Button</Button>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Chef;
