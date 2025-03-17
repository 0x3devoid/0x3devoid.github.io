import React from "react";
import { ImagesFile } from "../components/ImagesFile.js";
import "../assets/styles/style.css";
import { Button, Container } from "semantic-ui-react";

function Home() {
  const { dev, beast, light, moon, plane, devoid, twitter , work, link, birthday, date} = ImagesFile;
  return (
    <>
      <Container>
        <header>
          <div className="header__icon__container">
            <img src={dev} alt="developer" className="icon__img" />
            <img
              src={moon}
              alt="developer"
              className="icon__img icon__toggles"
            />
          </div>
        </header>
      </Container>

      <div className="header__dsgn">
        <img src={plane} alt="plane" className="header__banner" />

        <div className="logo__container">
          <img src={devoid} alt="devoid" />
        </div>
        <button>Follow</button>
      </div>

      <Container>
        <div className="header__content">
          <h1>Owoyemi Idris .O.</h1>
          <p>Software Developer | Blockchain Dev | Tech Enthusiast</p>
        </div>

        <div className="hobbies__container">
          <div className="hobbies__items">
            <img src={work} alt="work"  className="icon__img" />
            <p>Available</p>
          </div>

          <div className="hobbies__items">
            <img src={link} alt="beast"  className="icon__img" />
            <p>/link</p>
          </div>

          <div className="hobbies__items">
            <img src={birthday} alt="beast"  className="icon__img" />
            <p>Jun 13</p>
          </div>

          <div className="hobbies__items">
            <img src={date} alt="beast"  className="icon__img" />
            <p>March 2025</p>
          </div>



        </div>
      </Container>
    </>
  );
}

export default Home;
