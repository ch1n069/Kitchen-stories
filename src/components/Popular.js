import React, { useEffect, useState } from "react";

import "./Popular.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
// imports are above
function Popular() {
  // use state
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const api = await fetch(
      ` https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    );
    const data = await api.json();
    console.log(data);
    setPopular(data.recipes);
  };
  console.log(popular);

  return (
    <div className="wrapper">
      {popular.map((recipe) => {
        return (
          <div className="card" key={recipe.id}>
            <img src={recipe.image} alt={recipe.title} />
            <p>{recipe.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Popular;
