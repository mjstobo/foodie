import React, { Component } from "react";
import Background from '../img/dining.png';
import FloatingBalloon from './FloatingBalloon';

class MapItem extends Component {
  constructor(props){
    super(props)
    this.handleHover = this.handleHover.bind(this);
    this.endHover = this.endHover.bind(this);
    this.state = {
    };
  }

  handleHover = () => {
    this.props.action(this.props.item);
  }

  endHover = () => {
    this.props.removeHover();
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
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
            background: this.props.active ? 'lightgrey' : 'unset',
            border: this.props.active ? '1px solid black' : 'unset'
          }}
          onMouseOver={this.handleHover}
          onMouseOut={this.endHover}
          onClick={this.openModal}
          >
          <img alt="knife-fork-icon" src={Background}></img>
          <FloatingBalloon 
            name={this.props.item.Name}
            showOrHide={this.props.active}
          />
      </section>
    );
  }
}

export default MapItem;
