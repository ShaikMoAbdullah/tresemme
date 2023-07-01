import React from "react";
import homeImage from "../Images/HomeScreen/1--3.jpg";
import profileImage from "../Images/HomeScreen/profile.png";
import "./MainScreen.css";
import { ReactComponent as VectorImage } from "../Images/HomeScreen/Vector.svg";

const MainSceen = () => {
  return (
    <div className="homePageWrapper">
      <VectorImage className="vectorImage" />
      <img src={homeImage} alt="Home" className="homeImage" />
      <img src={profileImage} alt="Overlay" className="profileImage" />
    </div>
  );
};

export default MainSceen;
