import * as React from 'react';

import Context from './context';

import Child from './child';
import ChildWithContextType from './child-with-context-type';
import ChildWithContextConsumer from './child-with-context-consumer';
import ChildWithUseContext from './child-with-use-context';

class ContextProvider extends React.Component {
  state = {
    hello: 'word',
    timestamp: Date.now(),
  };

  updateTimestamp = () => {
    this.setState({
      timestamp: Date.now(),
    });
  };

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          updateTimestamp: this.updateTimestamp,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default class ContextSection extends React.Component {
  state = {
    hello: 'word',
    timestamp: Date.now(),
  };

  updateTimestamp = () => {
    this.setState({
      timestamp: Date.now(),
    });
  };

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    console.log('render: root');
    return (
      <section>
        <ContextProvider>
          {/* <Context.Provider
            value={{
              ...this.state,
              updateTimestamp: this.updateTimestamp,
            }}
          > */}
          <Child name="normal child" />
          <ChildWithContextType name="child (context type)" />
          <ChildWithContextConsumer name="child (context consumer)" />
          <ChildWithUseContext name="child (use context)" />
          <Context.Consumer>
            {(value) => {
              console.log('consumer: root');
              return (
                <div>
                  {JSON.stringify(value, null, 4)}
                  <button
                    onClick={() => {
                      value.timestamp = Date.now();
                    }}
                  >
                    change(=)
                  </button>
                  <button
                    onClick={() => {
                      value.updateTimestamp();
                    }}
                  >
                    change(value.updateTimestamp)
                  </button>
                </div>
              );
            }}
          </Context.Consumer>
          <div>
            <button onClick={() => this.forceUpdate()}>force update</button>
          </div>
          {/* </Context.Provider> */}
        </ContextProvider>
      </section>
    );
  }
}
