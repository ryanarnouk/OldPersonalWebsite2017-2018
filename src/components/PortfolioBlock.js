import React, { Component } from 'react';
import Fade  from 'react-fade';

class PortfolioBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseOver: false,
    }
  }
  render() { 
    return ( 
      <div className="portfolioblock" onMouseEnter={this.hover} onMouseLeave={this.hoverLeave}>
        {this.state.mouseOver ?
        <Fade duration={.30}> 
          {this.props.info}
        </Fade>:
        <div>
          <p className="portfoliotitle">{this.props.name}</p>
          <img src={this.props.source} className="portfolioimage"/>
        </div>
        }
      </div>
    );
  }
  hover = () => {
    this.setState({mouseOver: true});
  }
  hoverLeave = () => {
    this.setState({mouseOver: false});
  }
}
 
export default PortfolioBlock;