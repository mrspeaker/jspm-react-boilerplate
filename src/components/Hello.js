import React from "react";

const randy = () => Math.random() * 1000 | 0;

export default React.createClass({

  getInitialState () {
    return { rand: randy() };
  },

  tick () {
    this.setState({ rand: randy() });
  },

  componentDidMount () {
    this.interval = setInterval(this.tick, 1000);
  },

  componentWillUnmount () {
    clearInterval(this.interval);
  },

  render () {
    return <div className="Hello">
      <h1>Hello, { this.props.name }</h1>
      <div>
        Your lucky number is { this.state.rand }.
      </div>
    </div>
  }

});
