import React from "react";

export default React.createClass({

  getInitialState () {
    return {rand: Math.random() * 1000 | 0};
  },

  tick () {
    this.setState({rand: Math.random() * 1000 | 0});
  },

  componentDidMount () {
      this.interval = setInterval(this.tick, 1000);
  },

  componentWillUnmount () {
    clearInterval(this.interval);
  },

  render () {
    return <div className="Hello">
      <h1>Hello, {this.props.name}.</h1>
      <div>
        Your lucky number is {this.state.rand}
      </div>
    </div>
  }

});
