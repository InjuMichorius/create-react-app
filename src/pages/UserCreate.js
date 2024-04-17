import React from "react";
import ImageSlider from "../organisms/ImageSlider";
import UsernameInput from "../molecules/UsernameInput";
import Button from "../atoms/Button";
import logoImage from "../assets/images/logo.png";
import { Link } from "react-router-dom";

function UserCreate() {
    return (
      <div className="user-create-container">
        <h2 className="user-create-container__subtitle">Multiplayer</h2>
        <img src={logoImage} alt="Logo" />
        <ImageSlider />
        <UsernameInput />
        <Link to="/game-selection">
          <Button value={"Play"}/>
        </Link>
      </div>
    );
}

export default UserCreate;
