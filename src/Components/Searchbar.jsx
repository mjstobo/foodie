import React, { Component } from "react";
import locData from "../list.json";
import TileItem from "./TileItem";

function printData(locData) {
  let listOfRestuarants = [];

  for (let item in locData) {
    listOfRestuarants.push(locData[item]);
  }

  const printedList = listOfRestuarants.map(item => (
    <TileItem key={item.Id} item={item} />
  ));

  return printedList;
}

const checkValues = (searchTerm, value) => {
  let increment,
    n = -1;
  for (let i = 0; (increment = searchTerm[i++]); ) {
    if (!~(n = value.indexOf(increment, n + 1))) return false;
  }
  return true;
};

class Searchbar extends Component {
  constructor(props) {
    super(props);

    let origData = printData(locData.OpenRestaurants);
    console.log(origData);

    this.state = {
      listData: locData.OpenRestaurants,
      origData: locData.OpenRestaurants,
      printedData: origData,
      message: null
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let stateData = this.state.origData;
    let query = e.target.value;

    if (e !== "") {
      let returnData = stateData.filter(function(result) {
        let name = result.Name;
        let cuisines = result.Cuisines;
        let checkCuisine = false;

        name.toLowerCase();
        query.toLowerCase();

        for (let val in cuisines) {
          let cuisineName = cuisines[val].Name;
          if (!checkCuisine) {
            checkCuisine = checkValues(query, cuisineName);
          }
        }

        let checkedVal = checkValues(query, name);

        if (checkCuisine) {
          return true;
        } else if (checkedVal) {
          return true;
        } else {
          return false;
        }
      });

      if (returnData.length === 0) {
        console.log("Return Data is zero, but there are: ");
        console.log(returnData);

        this.setState({
          printedData: "",
          message: true
        });
      } else {
        this.setState({
          printedData: printData(returnData),
          message: false
        });
      }
    } else if (e === "") {
      this.setState({
        printedData: printData(stateData),
        message: false
      });
    }
  }

  render() {
    return (
      <section className="app-search">
        <div className="app-searchbar">
          <input
            type="text"
            className="input"
            onChange={this.handleChange}
            placeholder="Search..."
          />
        </div>

        <div className="restaurant-list">
          {this.state.message ? (
            <p className="app-search__no-results">Oops! No results!</p>
          ) : (
            this.state.printedData
          )}
        </div>
      </section>
    );
  }
}

export default Searchbar;
