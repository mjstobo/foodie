import React, { Component } from 'react'

class FloatingBalloon extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className={this.props.showOrHide ? "hint-balloon active" : "hint-balloon"}>
               {this.props.showOrHide ? this.props.name : ''}
            </div>
        )
    }
}

export default FloatingBalloon