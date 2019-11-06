import React, { Component } from 'react';
import MapItem from './MapItem';
import GoogleMapReact from 'google-map-react';


class MapView  extends Component {
  constructor(props){
    super(props);
    this.printData = this.printData.bind(this);

    this.state = {
      center: {
        lat: 51.509865,
        lng: -0.118092
      },
      zoom: 12.5
    };

  }

  printData(locData) {
    let listOfRestuarants = [];
    for (let item in locData) {
      listOfRestuarants.push(locData[item]);
    }
    const printedList = listOfRestuarants.map(item => (
    <MapItem 
      key={item.Id} 
      item={item} 
      lat={item.Address.Latitude} 
      lng={item.Address.Longitude} 
      text={item.Name} 
      />
    ));

    return printedList;
  }

    render() {
      return (
        <section className="item-map">
          <GoogleMapReact
            defaultCenter={this.state.center}
            defaultZoom={this.state.zoom} 
            yesIWantToUseGoogleMapApiInternals
            bootstrapURLKeys={{ key: 'AIzaSyARG6jifu-xZYbnfsMe1DYQH4wKK9SVRcA' }}
           >

          {this.printData(this.props.data)}

          </GoogleMapReact>
        </section>  
      );
    }
  }

  export default MapView


