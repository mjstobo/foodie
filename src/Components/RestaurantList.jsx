import React, { Component } from 'react';
import TileItem from './TileItem';

class RestuarantList  extends Component {

    constructor(props){
        super(props)
        this.printData = this.printData.bind(this);
    }

    printData(locData) {
        let listOfRestuarants = [];
        for (let item in locData) {
          listOfRestuarants.push(locData[item]);
        }
        const printedList = listOfRestuarants.map(item => (
        <TileItem key={item.Id} item={item} />
        ));

        return printedList;
      }

    render() {
      return (
        <section className="restaurant-list">
        {this.props.message ? (
            <p className="app-search__no-results">Oops! No results!</p>
          ) : (
            this.printData(this.props.printedData, this.props.type)
          )}
        </section>  
      );
    }
  }

  export default RestuarantList


