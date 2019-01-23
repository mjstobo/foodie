import React, { Component } from 'react';
import '../App.css';
import TileItem from './TileItem';


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
