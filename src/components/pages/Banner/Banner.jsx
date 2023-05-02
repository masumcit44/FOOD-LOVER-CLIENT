import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Banner.css'
const Banner = () => {
    const [recipes,setRecipes] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/receipe/1")
        .then(res=>res.json())
        .then(data=>setRecipes(data.recipes))
    },[])
    console.log(recipes);
    return (
        <Carousel slide={true} interval={1000} className=" " controls={false} indicators={false}>
            {recipes.map((recipe,index) => (
        <Carousel.Item className='rounded'  key={index}>
          <img  className="d-block carousel-img rounded-pill sharp-image" src={recipe.photo} alt={recipe.name} />
          <Carousel.Caption>
            <h3 className=' carousel-caption'>{recipe.name}</h3>
            <p className='carousel-caption-description '>{recipe.cookingMethod}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
    );
};

export default Banner;