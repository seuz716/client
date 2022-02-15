import React from "react";

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";

import image1 from "../components/imagenes Angie y su combo/image1.jpeg";
import image2 from "../components/imagenes Angie y su combo/image2.png";
import image3 from "../components/imagenes Angie y su combo/image3.jpeg";
import image4 from "../components/imagenes Angie y su combo/image4.jpeg";
import image5 from "../components/imagenes Angie y su combo/image5.jpeg";
import image6 from "../components/imagenes Angie y su combo/image6.jpeg";
import image7 from "../components/imagenes Angie y su combo/image7.jpeg";
import image8 from "../components/imagenes Angie y su combo/image8.jpeg";
import "./css/carrousel.css";

// Here, we display our Navbar
export default function Carrousel() {
  return (

     <div className="container">
       <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={image4} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={image5} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={image6} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
     </div>
  );
}
