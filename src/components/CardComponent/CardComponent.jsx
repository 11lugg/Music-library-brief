import React, { Component } from "react";
import styles from "./CardComponent.module.scss";

// Class containing JSX & methods associated with the card component

class CardComponent extends Component {
  // object containing any properties related to component state
  state = {
    isFaceUp: true
  };

  // setState allows us to update state indirectly
  handleClick = () => {
    this.setState({
      isFaceUp: !this.state.isFaceUp
    });
  };

  /*
    render function describes what the UI will look like using JSX.
  */

  render() {
    const rotateStyle = this.state.isFaceUp ? "" : styles.cardRotated;
    return (
      <div className={styles.scene} onClick={this.handleClick}>
        <img
          src={this.props.image}
          alt={this.props.artist}
          className={styles.picture}
        />
      </div>
      // Add onClick calling seletCard fn in props
      //   <div
      //     className={styles.scene}
      //     onClick={() => this.props.selectCard(this.props.albumData)}
      //   >
      //     <article
      //       onClick={this.handleClick}
      //       className={`${styles.card} ${rotateStyle}`}
      //     >
      //       <div className={styles.cardFront}>
      //         <img
      //           className={styles.picture}
      //           alt="fdskjjfn"
      //           src={this.props.artistData.image}
      //         />
      //       </div>

      // <div className={styles.cardBack} />
      //     </article>
      //   </div>
      // );
    );
  }
}

export default CardComponent;
