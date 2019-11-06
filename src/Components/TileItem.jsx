import React, { Component } from "react";
import TileDetails from './TileDetails'


class TileItem extends Component {

    constructor(props){
        super(props);

        const mapCuisinesList = (cuisines) => {
            let listOfCuisines = cuisines.map(cuisine => <li key={cuisine.SeoName} className="list-item__cuisine"> {cuisine.Name}</li>)
            return listOfCuisines;
        }

        this.state = ({
            cuisines: mapCuisinesList(this.props.item.Cuisines),
            showModal: false
        });
    } 

     openModal = () => {
         console.log("State updated to open modal")

        this.setState({
            showModal: true
        })
    }

    hideModal = () => {
        this.setState({
            showModal: false
        })
    }

 
  render() {
    return ( 
      <div className="list-item">
        <img className="list-item__logo" src={this.props.item.LogoUrl} alt="" />
        <div className="list-item__container">
        <TileDetails 
          name={this.props.item.Name}
          cuisines={this.state.cuisines}
        />
        <button className="link-btn" onClick={this.openModal}>MORE</button>
      </div>
      </div>
    );
  }
}

export default TileItem