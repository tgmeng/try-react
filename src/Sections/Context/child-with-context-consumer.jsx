import * as React from 'react';
import { PureComponent } from 'react';

import Context from './context';

export default class Child extends PureComponent {
  render() {
    console.log('render child (with context consumer):', this.props.name);
    return (
      <Context.Consumer>
        {(value) => {
          console.log('consumer:', this.props.name);
          return (
            <div>
              {this.props.name}: {JSON.stringify(value, null, 4)}
            </div>
          );
        }}
      </Context.Consumer>
    );
  }
}
