import React, { Component } from "react";
import Modal from './Modal';
import "../App.css";


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
        <h4>{this.props.item.Name}</h4>
        <div className="list-item__container">
        <ul className="list-item__cuisine-list">{this.state.cuisines}</ul>
        <button className="link-btn" onClick={this.openModal}>MORE</button>
      </div>
        <Modal item={this.props.item} show={this.state.showModal} />
      </div>
    );
  }
}

export default TileItem