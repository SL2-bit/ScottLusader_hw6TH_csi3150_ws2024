import React from "react";
import "./travelblog.css";

const TravelBlog = (props) => {
  return (
    <div className="travel-blog">
      <h1>{props.placeHeading}</h1>
      <div className="travel-blog-picture">
        <img
          src={props.placeImg1}
          className="blog-image1"
          alt={`${props.placeHeading}`}
        ></img>
        <img
          src={props.placeImg2}
          className="blog-image2"
          alt={`${props.placeHeading}`}
        ></img>
        <img
          src={props.placeImg3}
          className="blog-image3"
          alt={`${props.placeHeading}`}
        ></img>
      </div>
      <p>{props.placeDescription}</p>
    </div>
  );
};

export default TravelBlog;
