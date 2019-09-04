import React, { Component } from "react";
import styles from "../CardContainer/CardContainer.module.scss";
import CardComponent from "../CardComponent";
import albumData from "../../data/albumData";

class CardContainer extends Component {
  state = {};

  render() {
    return (
      <section className={styles.cards}>
        {albumData.map((band, index) => (
          <CardComponent cardData={band} key={index} />
        ))}
      </section>
    );
  }
}

export default CardContainer;
