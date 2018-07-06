import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    }
  }

  render() {
    var clicked = this.state.clicked;
    return (
      <div>
        {clicked ? (
          this.state.clicked
        ) : (
            <div className="blog">
              <p style={{margin: 0}}>Hey There! Check out my new blog app <a href="http://azbo400.github.io/Blog">here</a>!</p>
              <FontAwesome name="times" className="exit" onClick={() => this.setState({clicked: true})}/>
            </div>
          )
        }
      </div>
    );
  }
}

export default Blog;