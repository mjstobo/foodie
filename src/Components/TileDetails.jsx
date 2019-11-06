import React, { Component } from 'react';

class TileDetails extends Component {  

  render() {
    return (
       <div className="list-item__details">
        <h4>{this.props.name}</h4>
        <ul className="list-item__cuisine-list">{this.props.cuisines}</ul>
       </div>
    );
  }
}

export default TileDetails;