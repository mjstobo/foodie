import React, { Component } from "react";
import "../App.css";

let checkShowHide = showHide => {
  return showHide ? "item-modal modal-display" : "item-modal modal-hide";
};

const printAddress = item => {
  let address = [];

  for (let line in item.Address) {
    if (line !== "Latitude" && line !== "Longitude") {
      address.push(<li>{item.Address[line]}</li>);
    }
  }

  return address;
};

class Modal extends Component {
  constructor(props) {
    super(props);

    let showHide = this.props.show;

    let address = printAddress(this.props.item);

    this.state = {
      showHide: checkShowHide(showHide),
      address: address
    };
  }

  hideModal = () => {
    this.setState({
      showHide: "item-modal modal-hide"
    });
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      showHide: checkShowHide(nextProps.show)
    });
  }

  render() {
    return (
      <section className={this.state.showHide}>
        <div className="modal-container">
          <h3>{this.props.item.Name}</h3>
          <ul>{this.state.address}</ul>
          <button onClick={this.hideModal} className="item-button">
            CLOSE
          </button>
        </div>
      </section>
    );
  }
}

export default Modal;
