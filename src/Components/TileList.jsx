import React, { Component } from 'react';
import '../App.css';
import TileItem from './TileItem';

class TileList extends Component {  

  constructor(props){
    super(props);
    this.state = {
      listData: []
    }
  }

 componentDidMount(){

 function printData(locData) {

   let listOfRestuarants;

    for(let item in locData.OpenRestaurants){
      listOfRestuarants.push(locData.OpenRestaurants[item])
    };
  
    const printedList = listOfRestuarants.map(item => 
      <TileItem key={item.Id} item={item}></TileItem>
     )
  
    return printedList
   }
   
    this.setState({
      listData: printData(this.props.listData)
    })
 }


  componentWillReceiveProps(nextProps) {
    this.setState({
      listData: nextProps.items
    });
  }

  render() {
    return (
        <div className="restaurant-list">
          {this.state.listData}
        </div>
    );
  }
}

export default TileList;
