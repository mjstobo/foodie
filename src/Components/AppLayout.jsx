import React, { Component } from 'react';
import TileList from './TileList';
import Searchbar from './Searchbar';
import locData from '../list.json';

let listData = locData;

class AppLayout  extends Component {
    constructor(props){
        super(props);

        this.state = {
            listData: listData
        }
    }
   

    render() {
      return (
        <section className="app-layout">
            <div className="app-header">
                <h1>foodie.io</h1>
                <Searchbar />
            </div>
        <TileList listData={this.state.listData} />
        </section>  
      );
    }
  }

  export default AppLayout