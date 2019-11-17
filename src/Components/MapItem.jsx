import React, { Component } from "react";
import Background from '../img/dining.png';

class MapItem extends Component {
  constructor(props){
    super(props)
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover = () => {
    this.props.action(this.props.item);
  }
  

  render() {
    return (
      <section className="map-item"
          style={{
            color: "white",
            height: '24px',
            width: '24px',
            padding: "5px 5px",
            display: "inline-flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "100%",
            transform: "translate(-50%, -50%)",
            background: this.props.active ? 'red' : 'black'
          }}
          onMouseOver={this.handleHover}>
          >
          <img alt="knife-fork-icon" src={Background}></img>
      </section>
    );
  }
}

export default MapItem;
