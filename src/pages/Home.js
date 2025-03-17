import React, {useState} from "react";
import { ImagesFile } from "../components/ImagesFile.js";
import "../assets/styles/style.css";
import { Button, Container, Form, Input } from "semantic-ui-react";
import { Link } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Projects from "../components/Projects.js";

function Home() {
  const [activeTab, setActiveTab] = useState("Projects"); // Default active tab

  const navItems = ["Projects", "About", "Contact"];
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
        <Link to="https://x.com/0x3Devoid">
          <button>Follow</button>
        </Link>
      </div>

      <Container>
        <div className="header__content">
          <h1>Owoyemi Idris .O.</h1>
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
              <Input placeholder="Email Address" required />
              <Button
                type="submit"
                style={{ backgroundColor: "#C8A2C8", color: "#fff" }}
              >
                Subscribe
              </Button>
            </Form.Group>
          </Form>

          <i style={{
            fontSize: "10px",
           
          }}>No spam. Unsubscribe any time.</i>
        </div>

        <div>
          <nav
          >
            <ul
              style={{
                display: "flex",
                listStyle: "none",
                padding: 0,
                gap: "20px",
              }}
            >
              {navItems.map((item) => (
                <li
                  key={item}
                  onClick={() => setActiveTab(item)}
                  style={{
                    cursor: "pointer",
                    padding: "8px 12px",
                    borderBottom:
                      activeTab === item ? "3px solid #C8A2C8" : "none",
                    fontWeight: activeTab === item ? "bolder" : "bold",
                    color: activeTab === item ? "#C8A2C8" : "#333",
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
          </div>
        </div>



        <footer>
            <div className="footer__content" style={{textAlign: "center"}}>
                <p style={{fontSize: "10px", color: "gray"}}>0x3devoid © 2025</p>
            </div>
        </footer>
      </Container>
    </>
  );
}

export default Home;
