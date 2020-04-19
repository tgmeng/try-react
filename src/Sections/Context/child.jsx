import * as React from 'react';
import { Component } from 'react';

export default class Child extends Component {
  render() {
    console.log('render child:', this.props.name);
    return <div>{this.props.name}</div>;
  }
}
