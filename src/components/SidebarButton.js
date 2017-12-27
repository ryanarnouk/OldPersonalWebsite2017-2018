import React, { Component } from 'react';

import scrollToElement from 'scroll-to-element';

export class SidebarButton extends Component {
  constructor(props) {
    super(props);
  }
  render() { 
    return ( 
      <div className="sidebar-button" onClick={this.scrollTo}>
        <p className="button-text">{this.props.name}</p>
      </div>
    );
  }

  scrollTo = () => {
    scrollToElement(this.props.element, {
      duration: 700
    });
  }
}
 
export default SidebarButton;