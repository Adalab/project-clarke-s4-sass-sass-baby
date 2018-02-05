import React, { Component } from 'react';


class TabsItem extends Component {
  render(){
    return(
      <li className="button-menu" data-id={this.props.dataid}>
        <button className="main-nav-button" >
        <img src={`img/${this.props.logo}.png`} alt={this.props.alt} className={`nav-icon ${this.props.className}`} />
        <p className={`nav-text ${this.props.navClass}`}>{this.props.titleTab}</p>
        </button>
      </li>
    );
  }
}

export default TabsItem;
