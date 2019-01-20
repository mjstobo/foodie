import React, { Component } from "react";
import "../App.css";


class TileItem extends Component {

    constructor(props){
        super(props);

        this.state = ({
            cuisines: mapCuisinesList(this.props.item.Cuisines)
        });

        function  mapCuisinesList(cuisines) {
            let listOfCuisines = cuisines.map(cuisine => <li key={cuisine.SeoName} className="list-item__cuisine"> {cuisine.Name}</li>)
            return listOfCuisines;
        }
    } 
 
  render() {
    return (
      <div className="list-item">
        <img className="list-item__logo" src={this.props.item.LogoUrl} alt="" />
        <h4>{this.props.item.Name}</h4>
        <div className="list-item__container">
        <ul className="list-item__cuisine-list">{this.state.cuisines}</ul>
        <span className="list-item__link"><img alt="Select this Restaurant" src="data:image/png;base64,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"></img></span>
      </div>
      </div>
    );
  }
}

export default TileItem