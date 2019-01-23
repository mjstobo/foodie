import React, { Component } from 'react';
import Searchbar from './Searchbar';


class AppLayout  extends Component {

    render() {
      return (
        <section className="app-layout">
            <div className="app-header">
                <h1>foodie</h1>
            </div>
            <Searchbar />
        </section>  
      );
    }
  }

  export default AppLayout