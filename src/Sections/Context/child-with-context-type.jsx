import * as React from 'react';
import { Component } from 'react';

import Context from './context';

export default class Child extends Component {
  static contextType = Context;
  render() {
    console.log('render child (with context type):', this.props.name);
    return (
      <div>
        {this.props.name}: {JSON.stringify(this.context, null, 4)}
      </div>
    );
  }
}
