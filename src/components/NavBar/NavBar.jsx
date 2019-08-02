import React, { Component } from "react";
import styles from "./NavBar.module.scss";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav className={styles.NavBar}>
        <ul>
          <li>Punk</li>
          <li>Reggae</li>
          <li>Classical</li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
