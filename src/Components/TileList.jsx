import React, { Component } from 'react';

class TileList extends Component {  

 componentDidMount(){

 }


  componentDidUpdate(nextProps) {
    this.setState({
      listData: nextProps.items
    });
  }

  render() {
    return (
       <div></div>
    );
  }
}

export default TileList;
