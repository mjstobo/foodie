import React, { Component } from 'react';


class Searchbar  extends Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
      
    }

    handleChange(e){
        
    }

    render() {
      return (
         <div className="app-searchbar">
             <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
        </div>  
      );
    }
  }

  export default Searchbar