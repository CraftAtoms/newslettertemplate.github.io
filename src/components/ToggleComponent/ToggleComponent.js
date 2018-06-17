// eslint-disable-next-line
import React, { Component } from 'react';

export default class ToggleComponent extends Component {
  
  state = {
      on: false,
  }

  toggle = () => {
      this.setState({
          on: !this.state.on
      });
  }
  
    render() {
    const { children } = this.props;
    return children({
        on: this.state.on,
        toggle: this.toggle
    })
  }
}

