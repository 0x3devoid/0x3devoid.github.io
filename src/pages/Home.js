import React, { useState } from "react";
import { ImagesFile } from "../components/ImagesFile.js";
import "../assets/styles/style.css";
import { Button, Container, Form, Input, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Projects from "../components/Projects.js";

function Home() {
  const [activeTab, setActiveTab] = useState("Projects"); // Default active tab

  const navItems = ["Projects", "About", "Contact", "Docs"];
  const {
    dev,
    beast,
    light,
    moon,
    plane,
    devoid,
    twitter,
    work,
    link,
    birthday,
    date,
  } = ImagesFile;
  return (
    <div className="container">
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
        <Link to="https://x.com/0x3Devoid">
          <Button
            type="button"
            style={{
              backgroundColor: "#a598fa",
              color: "#fff",
              borderRadius: "50px",
              marginTop: "-40px",
              fontSize: "12px",
            }}
          >
            <Icon
              name="twitter"
              style={{
                color: "#fff",
                fontSize: "15px",
              }}
            />
            Follow
          </Button>
        </Link>
      </div>

      <Container>
        <div className="header__content">
          <h1>
            {" "}
            <Icon
              name="user"
              style={{
                color: "#a598fa",
                fontSize: "20px",
              }}
            />{" "}
            Owoyemi Idris .O.{" "}
          </h1>
          <p>Software Developer | Blockchain Dev | Tech Enthusiast</p>
        </div>

        <div className="hobbies__container">
          <div className="hobbies__items">
            <img src={work} alt="work" className="icon__img" />
            <p>Available</p>
          </div>

          <div className="hobbies__items">
            <img src={link} alt="beast" className="icon__img" />
            <Link to="https://github.io/0x3devoid">
              <p>Github</p>
            </Link>
          </div>

          <div className="hobbies__items">
            <img src={birthday} alt="beast" className="icon__img" />
            <p>Jun 13</p>
          </div>

          <div className="hobbies__items">
            <img src={date} alt="beast" className="icon__img" />
            <p>March 2025</p>
          </div>
        </div>

        <div className="news__letter">
          <p>Keep up to date with my latest projects and adventures!</p>

          <Form>
            <Form.Group>
              <Input placeholder="Email Address" type="email" required />
              <Button
                type="submit"
                style={{
                  backgroundColor: "#a598fa",
                  color: "#fff",
                  borderRadius: "50px",
                }}
              >
                <Icon
                  name="mail"
                  style={{
                    color: "#fff",
                    fontSize: "15px",
                  }}
                />
                Subscribe
              </Button>
            </Form.Group>
          </Form>

          <i
            style={{
              fontSize: "10px",
            }}
          >
            No spam. Unsubscribe any time.
          </i>
        </div>

        <div>
          <nav>
            <ul
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                listStyle: "none",
                padding: 0,
                gap: "20px",
              }}
            >
              {navItems.map((item) => (
                <li
                  key={item}
                  onClick={() => setActiveTab(item)}
                  className="nav__items"
                  style={{
                    cursor: "pointer",
                    padding: "8px 12px",
                    borderBottom:
                      activeTab === item ? "3px solid #a598fa" : "none",
                    fontWeight: activeTab === item ? "bolder" : "bold",
                    color: activeTab === item ? "#a598fa" : "#333",
                    transition: "0.3s",
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </nav>

          <div style={{ marginTop: "10px" }}>
            {activeTab === "Projects" && <Projects />}
            {activeTab === "About" && <About />}
            {activeTab === "Contact" && <Contact />}
            {activeTab === "Docs" && "Docs"}
          </div>
        </div>

        <footer>
          <div
            className="footer__content"
            style={{ textAlign: "center", marginTop: "50px" }}
          >
            <div className="socials__container">
              <div className="socials__items">
                <Link to="https://twitter.com/0x3Devoid">
                  <Icon
                    name="twitter"
                    style={{
                      color: "#1DA1F2",
                      fontSize: "20px",
                    }}
                  />
                </Link>
              </div>
              <div className="socials__items">
                <Link>
                  <Icon
                    name="telegram"
                    style={{
                      color: "#0088CC",
                      fontSize: "20px",
                    }}
                  />
                </Link>
              </div>
              <div className="socials__items">
                <Link>
                  <Icon
                    name="linkedin"
                    style={{
                      color: "#0A66C2",
                      fontSize: "20px",
                    }}
                  />
                </Link>
              </div>
              <div className="socials__items">
                <Link>
                  <Icon
                    name="discord"
                    style={{
                      color: "#5865F2",
                      fontSize: "20px",
                    }}
                  />
                </Link>
              </div>
              <div className="socials__items">
                <Link>
                  <Icon
                    name="medium"
                    style={{
                      color: "#12100E",
                      fontSize: "20px",
                    }}
                  />
                </Link>
              </div>

              <div className="socials__items">
                <Link>
                  <Icon
                    name="facebook"
                    style={{
                      color: "#1877F2",
                      fontSize: "20px",
                    }}
                  />
                </Link>
              </div>
            </div>
            <p style={{ fontSize: "10px", color: "gray" }}>0x3devoid © 2025</p>
          </div>
        </footer>
      </Container>
    </div>
  );
}

export default Home;
