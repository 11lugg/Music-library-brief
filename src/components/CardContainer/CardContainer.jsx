import React, { Component } from "react";
import styles from "../CardContainer/CardContainer.module.scss";
import CardComponent from "../CardComponent";
import albumData from "../../data/albumData";

class CardContainer extends Component {
  state = {};
  render() {
    return (
      <section className={styles.cards}>
        <CardComponent
          image={albumData[0].image}
          artist={albumData[0].artist}
        />
        <CardComponent
          image={albumData[1].image}
          artist={albumData[1].artist}
        />
        <CardComponent
          image={albumData[2].image}
          artist={albumData[2].artist}
        />
        <CardComponent
          image={albumData[3].image}
          artist={albumData[3].artist}
        />
        <CardComponent
          image={albumData[4].image}
          artist={albumData[4].artist}
        />
        <CardComponent
          image={albumData[5].image}
          artist={albumData[5].artist}
        />
        <CardComponent
          image={albumData[6].image}
          artist={albumData[6].artist}
        />
        <CardComponent
          image={albumData[7].image}
          artist={albumData[7].artist}
        />
        <CardComponent
          image={albumData[8].image}
          artist={albumData[8].artist}
        />
        <CardComponent
          image={albumData[9].image}
          artist={albumData[9].artist}
        />
        <CardComponent
          image={albumData[10].image}
          artist={albumData[10].artist}
        />
        <CardComponent
          image={albumData[11].image}
          artist={albumData[11].artist}
        />
        <CardComponent
          image={albumData[12].image}
          artist={albumData[12].artist}
        />
        <CardComponent
          image={albumData[13].image}
          artist={albumData[13].artist}
        />
        <CardComponent
          image={albumData[14].image}
          artist={albumData[14].artist}
        />
      </section>
    );
  }
}

export default CardContainer;
