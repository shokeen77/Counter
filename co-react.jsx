import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  shouldComponentUpdate(nextProps, nextState) {
    // Only update if the count is even
    return nextState.count % 2 === 0;
  }

  componentDidUpdate() {
    console.log(`Rendering with count: ${this.state.count}`);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Increment</button>
        <div>{`Count: ${this.state.count}`}</div>
      </div>
    );
  }
}

export default Counter;