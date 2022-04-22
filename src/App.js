import "./styles/App.css";
import Navbar from "./components/Navbar";
import React from "react";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
          <div id="socials">
            <span id="facebook">
              <a href="https://www.facebook.com/zelenskiy.official">
                <i className="fa fa-facebook-square"></i>
              </a>
            </span>
            <span id="twitter">
              <a href="https://twitter.com/zelenskyyua">
                <i className="fa fa-twitter"></i>
              </a>
            </span>
            <span id="youtube">
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                <i className="fa fa-youtube"></i>
              </a>
            </span>
          </div>
        </header>
        <main className="App-main">
          <section id="About" name="about">
            <div className="container">
              <h1>kto som ?</h1>
              <p>
                Excepteur amet laborum id sint officia laboris tempor eu Lorem
                enim reprehenderit irure dolor est. Cillum et nisi sit veniam
                incididunt consectetur pariatur ad consectetur esse eiusmod.
                Exercitation ea cupidatat esse ullamco minim duis velit
                voluptate consectetur deserunt tempor velit pariatur. Culpa duis
                labore eiusmod dolor nulla cillum reprehenderit.Ullamco quis
                aliqua est ad exercitation labore incididunt amet. Cupidatat
                laborum est minim occaecat laboris est consequat minim veniam id
                adipisicing. Anim id ullamco laborum exercitation eu nulla duis
                esse. Non amet culpa nisi occaecat deserunt dolore. Sunt id
                adipisicing pariatur occaecat aliqua eiusmod veniam consequat.
                Laboris nisi do excepteur proident incididunt ipsum nulla minim
                quis. Ut ut aute velit ipsum non nulla magna eiusmod id dolor
                reprehenderit eiusmod.
              </p>
            </div>
          </section>
          <section id="Education" name="edu">
            <div className="container">
              <h1>moje štúdium</h1>
              <h2>Základná Škola</h2>
              <div className="education-item">
                <p className="col-md-4 col-sm-12">
                  Labore qui exercitation deserunt incididunt duis in qui
                  cupidatat voluptate duis velit. Veniam adipisicing minim
                  fugiat amet ea adipisicing reprehenderit proident nulla
                  consequat. Sit nulla irure consequat officia. Elit cupidatat
                  non minim voluptate deserunt reprehenderit minim ullamco est
                  quis adipisicing.
                </p>
                <img
                  className="image col-md-2 col-sm-12"
                  src="../../school0.jpg"
                  alt="primary"
                ></img>
                <p className="col-md-4 col-sm-12">
                  <strong>Datum:</strong>
                  <br />
                  Cillum nisi cillum incididunt sint Lorem id fugiat cillum
                  sint.
                  <br />
                  <strong>Odbor:</strong>
                  <br />
                  Cillum nisi cillum incididunt sint Lorem id fugiat cillum
                  sint.
                  <br />
                </p>
              </div>
              <h2>Strená Škola</h2>
              <div className="education-item">
                <p className="col-md-4 col-sm-12">
                  Ad mollit velit quis pariatur cupidatat aute et cupidatat qui.
                  Voluptate quis consectetur irure proident veniam voluptate
                  excepteur officia enim cillum. Veniam commodo velit nisi ad
                  non qui qui amet pariatur pariatur adipisicing qui
                  exercitation laborum. Et officia aliqua sit elit in cillum
                  ipsum consectetur dolor do minim culpa Lorem. Cillum et id
                  exercitation et eiusmod laboris incididunt commodo incididunt
                  magna.
                </p>
                <img
                  className="image col-md-2 col-sm-12"
                  src="../../school.jpeg"
                  alt="high"
                ></img>
                <p className="col-md-4 col-sm-12">
                  <strong>Datum:</strong>
                  <br />
                  Cillum nisi cillum incididunt sint Lorem id fugiat cillum
                  sint.
                  <br />
                  <strong>Odbor:</strong>
                  <br />
                  Cillum nisi cillum incididunt sint Lorem id fugiat cillum
                  sint.
                  <br />
                </p>
              </div>
              <h2>Vysoká Škola</h2>
              <div className="education-item">
                <p className="col-md-4 col-sm-12">
                  Enim sunt labore culpa in cillum est consequat consectetur
                  aute fugiat. Sunt magna anim et mollit quis anim aliqua.
                  Reprehenderit quis mollit aliqua incididunt veniam consectetur
                  enim nulla labore sunt non incididunt pariatur. Sit fugiat
                  eiusmod sint est adipisicing excepteur nisi tempor labore.
                </p>
                <img
                  className="image col-md-2 col-sm-12"
                  src="../../school1.jpg"
                  alt="university"
                ></img>
                <p className="col-md-4 col-sm-12">
                  <strong>Datum:</strong>
                  <br />
                  Cillum nisi cillum incididunt sint Lorem id fugiat cillum
                  sint.
                  <br />
                  <strong>Odbor:</strong>
                  <br />
                  Cillum nisi cillum incididunt sint Lorem id fugiat cillum
                  sint.
                  <br />
                </p>
              </div>
            </div>
          </section>
          <section id="Presidency" name="prec">
            <div className="container">
              <h1>som prezident</h1>
            </div>
          </section>
          <section id="Entertainment" name="entr">
            <div className="container">
              <h1>kde som účinkoval ?</h1>
            </div>
          </section>
        </main>
        <footer className="App-footer">
          <div className="col-md-12">
            <p>Osobná stránka prezidenta Vladimira Alexandroviča Zelenského.</p>
            <a href="https://www.fit.vutbr.cz/study/courses/ITW/private/cviceni/projekt2/.cs">
              ITW 2022 - Zadanie
            </a>
          </div>
        </footer>
      </div>
    );
  }
}
