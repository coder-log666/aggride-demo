import React, { Component } from 'react';

export default class CustomHeader extends Component {
  
    change = (event) => {
        if (event.target.checked) {
            this.props.selectedAll()
        }else {
            this.props.unSelectedAll()
        } 
   }

  render() {
    return (
        <input type='checkbox' onChange={this.change}></input>
    )
  }

}