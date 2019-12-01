import React, { Component } from "react";
import Modal from "./Modal";

class SmallTileItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cuisines: this.props.item.Cuisines,
      showModal: false
    };

    this.mapCuisinesList = this.mapCuisinesList.bind(this);
    this.hoverOverItem = this.hoverOverItem.bind(this);
    this.endHover = this.endHover.bind(this);
    this.hideItemModal = this.hideItemModal.bind(this);

  }

  hoverOverItem = () => {
    this.props.action(this.props.item);
  };

  endHover = () => {
    this.props.removeHover();
  };

  openModal = () => {
    this.setState({
      showModal: true
    });
  };

  hideItemModal = () => {
    this.setState({
      showModal: false
    });
  };

  mapCuisinesList = cuisines => {
    let listOfCuisines = cuisines.map(cuisine => (
      <li key={cuisine.SeoName} className="small-tile__cuisine-item">
        {" "}
        {cuisine.Name}
      </li>
    ));
    return listOfCuisines;
  };

  render() {
    return (
      <div
        className="small-tile"
        onMouseOver={this.hoverOverItem}
        onMouseLeave={this.endHover}
        onClick={this.openModal}
        style={{ background: this.props.active ? "lightcyan" : "white" }}
      >
        <p>{this.props.item.Name}</p>
        <ul className="small-tile__cuisines">
          {this.mapCuisinesList(this.state.cuisines)}
        </ul>
        <Modal
          item={this.props.item}
          show={this.state.showModal}
          hideItemModal={this.hideItemModal}
        />
      </div>
    );
  }
}

export default SmallTileItem;
