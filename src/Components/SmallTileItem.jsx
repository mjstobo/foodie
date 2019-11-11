import React, { Component } from "react";

class SmallTileItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cuisines: this.props.item.Cuisines
    };

    this.mapCuisinesList = this.mapCuisinesList.bind(this);
    this.hoverOverItem = this.hoverOverItem.bind(this);
  }

  hoverOverItem = item => {
      
  }

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
      <div className="small-tile" onMouseOver={() => {this.hoverOverItem(this.props.item)}}>
        <p>{this.props.item.Name}</p>
        <ul className="small-tile__cuisines">
          {this.mapCuisinesList(this.state.cuisines)}
        </ul>
      </div>
    );
  }
}

export default SmallTileItem;
