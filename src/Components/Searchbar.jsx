import React, { Component } from "react";
import locData from "../list.json";
import RestuarantList from "./RestaurantList.jsx";
import MapView from './MapView.jsx';


const checkValues = (searchTerm, value) => {
  let increment,
    n = -1;
  for (let i = 0; (increment = searchTerm[i++]); ) {
    if (!~(n = value.indexOf(increment, n + 1))) return false;
  }
  return true;
};

function onlyUnique(value, index, self){
  return self.indexOf(value) === index;
}



class Searchbar extends Component {
  constructor(props) {
    super(props);

    let origData = locData.OpenRestaurants;

    this.state = {
      listData: locData.OpenRestaurants,
      origData: locData.OpenRestaurants,
      filterData: [],
      cuisineList: this.prepareFilterOptions(locData.OpenRestaurants),
      printedData: origData,
      toggleList: false,
      message: null,
      isList: false
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.showHide = this.showHide.bind(this);
    this.toggleView = this.toggleView.bind(this);
  }

  handleOptionChange = e => {
    let filterName = e.target.value;

    // get state data
    let currFilters = this.state.filterData;

    // look for current filter
    if (currFilters.includes(filterName)) {
      for (let index in currFilters) {
        if (currFilters[index] === filterName) {
          currFilters.splice(index, 1);
        }
      }
    } else {
      currFilters.push(filterName);
    }

    this.setState({
      filterData: currFilters
    });

    let returnData = this.searchHandler("");

    if (returnData.length === 0) {
      this.setState({
        printedData: "",
        message: true
      });
    } else {
      this.setState({
        printedData: returnData,
        message: false
      });
    }
  };

  prepareFilterOptions = data => {
    let filteredCuisines = [];
    let uniqueFilters = [];
    let returnedFilters = [];

    for (let item in data) {
      console.log(data[item]);

      let index = data[item];

      for (let cuisine in index.Cuisines) {
        filteredCuisines.push(index.Cuisines[cuisine].Name);
      }
    }

    uniqueFilters = filteredCuisines.filter(onlyUnique);

    for (let index in uniqueFilters) {
      returnedFilters.push(
        <label>
          {uniqueFilters[index]}
          <input
            onClick={this.handleOptionChange}
            type="checkbox"
            className="search-filter"
            value={uniqueFilters[index]}
          />
        </label>
      );
    }

    return returnedFilters;
  };

  searchHandler(searchTerm) {
    let filterData = this.state.filterData;
    let stateData = this.state.origData;
    let returnData;
    let query = searchTerm.toLowerCase();

    if (filterData.length > 0) {
      let filteredSearchData = stateData.filter(function(result) {
        let cuisines = result.Cuisines;
        let cuisineFlag = false;

        for (let val in cuisines) {
          for (let filter in filterData) {
            if (cuisines[val].Name === filterData[filter]) {
              cuisineFlag = true;
            }
          }
        }

        return cuisineFlag;
      });

      stateData = filteredSearchData;
    }

    if (query !== "") {
      returnData = stateData.filter(function(result) {
        let name = result.Name.toLowerCase();
        let cuisines = result.Cuisines;
        let checkCuisine = false;

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

      return returnData;
    }

    return stateData;
  }

  handleSearchChange(e) {
    let returnData = this.searchHandler(e.target.value);
    let stateData = this.state.origData;

    if (returnData.length === 0) {
      this.setState({
        printedData: "",
        message: true
      });
    } else {
      this.setState({
        printedData: returnData,
        message: false
      });
    }

    if (e === "") {
      this.setState({
        printedData: stateData,
        message: false
      });
    }
  }

  toggleMapList = () => {
    const toggle = this.state.isList;

    this.setState({
      isList: !toggle
    });
  }

  showHide(event) {
    const toggle = this.state.toggleList;

    this.setState({
      toggleList: !toggle
    });
  }

  toggleView = () => {
    if(this.state.isList) {
      return    <RestuarantList
      printedData={this.state.printedData}
      message={this.state.message}
      type={this.state.typeOfList}
    />
    } else {
      console.log('mapview');
         return <MapView
          data={this.state.printedData}
          message={this.state.message}
        />
    }
  }

  render() {
    return (
      <section className="app-search">
        <div className="app-searchbar">
          <input
            type="text"
            className="search-input"
            onChange={this.handleSearchChange}
            placeholder="Search..."
          />
        </div>
        <div className="app-search-filters">
          {this.state.toggleList && this.state.cuisineList}
        </div>
        <div className="button-group">
          <button className="hide-filter" onClick={this.showHide}>
            Toggle Filters
          </button>
          <button className="map-list-toggle" onClick={this.toggleMapList}>
            Map View
          </button>
        </div>
       <this.toggleView />
      </section>
    );
  }
}

export default Searchbar;
