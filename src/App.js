import "./styles/App.css";
import Navbar from "./components/Navbar";
import React from "react";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" name="header">
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
              <div className="presidency-card">
                <div className="part col-md-6">
                  <h2>Kabinet a administrácia</h2>
                  <img src="../../cabinet.jpg" alt="kabinet"></img>
                </div>
                <p>
                  Sint nisi ullamco veniam dolor elit aute dolore irure. Aliquip
                  voluptate irure ipsum sit quis esse anim reprehenderit nulla
                  mollit id. Consectetur nisi in ad officia commodo culpa Lorem
                  reprehenderit in ex adipisicing proident amet. Proident
                  commodo id velit ipsum enim ex cupidatat nisi et deserunt enim
                  nulla. Irure excepteur ex enim mollit aute proident amet.
                  Officia incididunt duis fugiat proident occaecat eiusmod
                  fugiat veniam eiusmod anim et eiusmod. Excepteur tempor
                  voluptate aliqua sit in cupidatat ea esse consequat mollit
                  culpa commodo.
                </p>
              </div>

              <div className="presidency-card">
                <div className="part col-md-8">
                  <h2>Pokus o ukončenie konfliktu</h2>
                  <img src="../../conflikt.jpg" alt="attempt"></img>
                </div>
                <p>
                  Reprehenderit ad cupidatat in cillum non sit incididunt elit
                  id nulla cillum qui. Tempor qui voluptate dolore incididunt
                  amet et sunt minim commodo commodo. Commodo laboris nulla
                  minim nisi laboris nulla labore laborum quis nostrud veniam
                  ad.
                </p>
              </div>
              <div className="presidency-card">
                <div className="part col-md-6">
                  <h2>Zahraničné návštevy</h2>
                  <img src="../../biden.jpg" alt="met"></img>
                </div>
                <p>
                  Deserunt cillum eiusmod nostrud reprehenderit aliquip
                  reprehenderit id fugiat qui. Voluptate tempor duis adipisicing
                  ad quis velit. Non velit labore veniam quis. Labore enim
                  proident magna dolore reprehenderit ea aliqua labore cupidatat
                  in excepteur nostrud tempor. Ad et consectetur eu proident
                  amet anim quis enim voluptate non laborum ex irure.
                </p>
              </div>
              <div className="presidency-card">
                <div className="part col-md-6 col-sm-12">
                  <h2>Vojna</h2>
                  <img className="col-sm-12" src="../../war.jpg" alt="war"></img>
                </div>
                <p>
                  Consectetur eiusmod ullamco cillum id do duis do occaecat nisi
                  non cupidatat quis non. In dolor occaecat officia commodo
                  velit esse fugiat do Lorem ex aliqua voluptate minim velit. Ex
                  aliqua est reprehenderit mollit consectetur deserunt labore
                  aute. Aute proident do minim anim excepteur culpa incididunt
                  ea et aliqua anim tempor duis minim. Anim mollit officia sunt
                  qui ipsum voluptate sint adipisicing. Do deserunt quis ullamco
                  quis.
                </p>
              </div>
            </div>
          </section>
          <section id="Entertainment" name="entr">
            <div className="container">
              <h1>kde som účinkoval ?</h1>
            </div>
            <div className="grid-film">
              <div className="film-card">
                <h3>Love in the Big City</h3>
                <img src="../../film1.jpg" alt="love"></img>
                <p>
                  Et minim veniam in reprehenderit et est exercitation.
                  Exercitation ullamco reprehenderit consectetur labore id amet
                  aliquip.
                </p>
              </div>
              <div className="film-card">
                <h3>Office Romance. Our Time</h3>
                <img src="../../film2.jpg" alt="office"></img>
                <p>
                  Enim laborum dolore consequat eu magna. Ullamco deserunt
                  consequat mollit laboris occaecat cupidatat esse nostrud sit
                  aliquip do culpa.
                </p>
              </div>
              <div className="film-card">
                <h3>8 New Dates</h3>
                <img src="../../film3.jpg" alt="Dates"></img>
                <p>
                  Laboris nisi esse reprehenderit minim excepteur reprehenderit
                  non aute occaecat commodo.
                </p>
              </div>
              <div className="film-card">
                <h3>Servant of the People 2</h3>
                <img src="../../film4.jpg" alt="people"></img>
                <p>
                  Voluptate sunt anim deserunt sint consequat id. Cupidatat
                  ipsum ut occaecat velit sunt enim proident consectetur
                  pariatur dolore esse dolore eiusmod in.
                </p>
              </div>
              <div className="film-card">
                <h3>I, You, He, She</h3>
                <img src="../../film5.jpg" alt="I"></img>
                <p>
                  Laboris in consectetur magna eiusmod non ea deserunt anim
                  laborum.
                </p>
              </div>
              <div className="film-card">
                <h3>Love in Vegas</h3>
                <img src="../../film6.jpg" alt="Vegas"></img>
                <p>
                  Laborum consequat tempor ullamco occaecat tempor excepteur
                  sunt id eu exercitation.
                </p>
              </div>
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
