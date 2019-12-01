import React, { Component } from "react";


class Modal extends Component {
  constructor(props) {
    super(props);
    this.hideItemModal = this.hideModal.bind(this);
    this.checkshowOrHideStyles = this.checkshowOrHideStyles.bind(this);
    this.printAddress = this.printAddress.bind(this);

    this.state = {
      showOrHideStyles: this.checkshowOrHideStyles(this.props.show),
      address: this.printAddress(this.props.item)
    };
  }

   printAddress = item => {
    let address = [];
  
    for (let line in item.Address) {
      if (line !== "Latitude" && line !== "Longitude") {
        address.push(<li>{item.Address[line]}</li>);
      }
    }
    return address;
  };

  checkshowOrHideStyles = showOrHideStyles => {
    return showOrHideStyles ? "item-modal modal-display" : "item-modal modal-hide";
  };

  hideModal = () => {
    this.props.hideItemModal();
    this.setState({
      showOrHideStyles: this.checkshowOrHideStyles(false),
    });    
  };  

  componentDidUpdate(prevProps){
    if(prevProps.show !== this.props.show){
      this.setState({
        showOrHideStyles: this.checkshowOrHideStyles(this.props.show)
      })
    }
  }

  render() {
    return (
      <section className={this.state.showOrHideStyles}>
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
