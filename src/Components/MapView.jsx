import React, { Component } from 'react';
import MapItem from './MapItem';
import GoogleMapReact from 'google-map-react';
import GOOGLE_MAPS_API from '../foodie.env';
import SmallTileItem from './SmallTileItem';


class MapView  extends Component {
  constructor(props){
    super(props);
    this.printMapData = this.printMapData.bind(this);
    this.printListData = this.printListData.bind(this);
    this.hoverOverChild = this.hoverOverChild.bind(this);

    this.state = {
      center: {
        lat: 51.509865,
        lng: -0.118092
      },
      zoom: 12.5,
      activeId: null
    };

  }

  hoverOverChild = (item) => {
    this.setState({
      activeId: item.Id
    })
  }

  printMapData(locData) {
    let listOfRestuarants = [];
    let printedList = [];
    for (let item in locData) {
      listOfRestuarants.push(locData[item]);
    }
     printedList = listOfRestuarants.map(item => (
      <MapItem 
      key={item.Id} 
      item={item} 
      lat={item.Address.Latitude} 
      lng={item.Address.Longitude} 
      text={item.Name} 
      active={(this.state.activeId === item.Id) ? true : false}
      action={this.hoverOverChild}
      />
      ));
    
    return printedList;
  }

  printListData(locData) {
    let listOfRestuarants = [];
    for (let item in locData) {
      listOfRestuarants.push(locData[item]);
    }
    let printedList = listOfRestuarants.map(item => (
      <SmallTileItem
      key={item.Id} 
      item={item} 
      text={item.Name}
      active={(this.state.activeId === item.Id) ? true : false}
      action={this.hoverOverChild}
      />
    ));
       return printedList;
  }

    render() {
      return (
        <section className="map-view__layout">
        <section className="item-list">
          {this.printListData(this.props.data)}
        </section>
        <section className="item-map">
          <GoogleMapReact
            defaultCenter={this.state.center}
            defaultZoom={this.state.zoom} 
            yesIWantToUseGoogleMapApiInternals
            bootstrapURLKeys={{ key: GOOGLE_MAPS_API }}
           >

          {this.printMapData(this.props.data)}

          </GoogleMapReact>
        </section>  
        </section>
      );
    }
  }

  export default MapView


