import React, { Component } from 'react'

class FloatingBalloon extends Component {
    constructor(props){
        super(props);
        this.mapCuisines = this.mapCuisines.bind(this);
        this.state = {
            cuisines: this.props.item.Cuisines
        }
    }

    mapCuisines = (cuisines) => {
        let listOfCuisines = cuisines.map(cuisine => (
          <li key={cuisine.SeoName} className="hint-balloon-cuisine">
            {" "}
            {cuisine.Name}
          </li>
        ));
        return listOfCuisines;
      };

    render() {
        return (
            <div className={this.props.showOrHide ? "hint-balloon active" : "hint-balloon"}>
              <h4>{this.props.showOrHide ? this.props.item.Name : ''}</h4>
              <ul>{this.mapCuisines(this.state.cuisines)}</ul>
            </div>
        )
    }
}

export default FloatingBalloon