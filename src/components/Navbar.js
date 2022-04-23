import React from "react";
import "./Navbar.css";
import { scroller } from "react-scroll";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      burger: false,
    };
  }

  render() {
    return (
      <nav className="navigation">
        <h1>
          Osobná stránka <i className="fa fa-user-circle-o"></i>
        </h1>
        <div
          className="hambuger-menu"
          onClick={() => this.setState({ burger: !this.state.burger })}
        >
          <i
            className={
              this.state.burger ? "fa fa-window-close" : "fa fa-align-justify"
            }
          ></i>
        </div>
        <ul className={this.state.burger ? "active menu" : "menu"}>
          <li
            className="item"
            onClick={() =>
              scroller.scrollTo("header", {
                duration: 800,
                delay: 0,
                smooth: "easeInOutQuart",
              })
            }
          >
            <a href="#home">
              Domov <i className="fas fa-home"></i>
            </a>
          </li>
          <li
            className="item"
            onClick={() =>
              scroller.scrollTo("about", {
                duration: 800,
                delay: 0,
                smooth: "easeInOutQuart",
              })
            }
          >
            <a href="#About">
              O mne <i className="fas fa-user-circle"></i>
            </a>
          </li>
          <li
            className="item"
            onClick={() =>
              scroller.scrollTo("edu", {
                duration: 800,
                delay: 0,
                smooth: "easeInOutQuart",
              })
            }
          >
            <a href="#Education">
              Vzdelanie <i className="fa fa-book"></i>
            </a>
          </li>
          <li
            className="item"
            onClick={() =>
              scroller.scrollTo("prec", {
                duration: 800,
                delay: 0,
                smooth: "easeInOutQuart",
              })
            }
          >
            <a href="#Presidency">
              Prezidentovanie <i className="fa fa-institution"></i>
            </a>
          </li>
          <li
            className="item"
            onClick={() =>
              scroller.scrollTo("entr", {
                duration: 800,
                delay: 0,
                smooth: "easeInOutQuart",
              })
            }
          >
            <a href="#Entertainment">
              Zábava <i className="fa fa-music"></i>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
