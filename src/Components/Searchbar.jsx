import React, { Component } from 'react';
import locData from '../list.json';
import TileItem from './TileItem';

function printData(locData) {

    let listOfRestuarants = [];
  
     for(let item in locData){
       listOfRestuarants.push(locData[item])
     };
   
     const printedList = listOfRestuarants.map(item => 
       <TileItem key={item.Id} item={item}></TileItem>
      )

     return printedList
 }

class Searchbar  extends Component {

    constructor(props){
        super(props);

        let origData = printData(locData.OpenRestaurants)
        console.log(origData)

        this.state = {
            listData: locData.OpenRestaurants,
            origData: locData.OpenRestaurants,
            printedData: origData,
            message: null
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){

        let stateData = this.state.origData;
        let query = e.target.value;

        let noResults = 'Oops! There is no results'

        if(e !== ""){

        let returnData = stateData.filter(function(result){ 
            let name = result.Name;

            name.toLowerCase();
            query.toLowerCase();

            return name.includes(query)
        });

        if (returnData.length === 0) {

            this.setState({
                printedData: '',
                message: noResults
            })
        }

        this.setState({
            printedData:  printData(returnData),
            message: null
        });

    } else if(e === ""){

        this.setState({
            printedData: printData(stateData),
            message: null
        })
    }

    }

    render() {
      return (
     <section className="app-search">
         <div className="app-searchbar">
             <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
        </div>  

        <div className="restaurant-list">
            {(this.state.printedData.length === 0) ? <p className="app-search__no-results">Oops! No results!</p> : this.state.printedData }
        </div>
        </section>
      );
    }
  }

  export default Searchbar