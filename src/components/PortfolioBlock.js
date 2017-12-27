;import React, { Component } from 'react';

class PortfolioBlock extends Component {
  state = {}
  render() { 
    return ( 
      <div className="portfolioblock">
        <p>{this.props.name}</p>
      </div>
    );
  }
}
 
export default PortfolioBlock;