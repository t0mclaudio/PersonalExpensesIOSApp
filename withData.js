import React, {Component} from 'react';
import {uuid} from 'uuidv4';

const withData = WrappedComponent => {
  class WithInjectedData extends Component {
    state = {
      expenses: [
        {id: uuid(), date: new Date(), text: 'Milk', amount: 100},
        {id: uuid(), date: new Date(), text: 'Eggs', amount: 100},
        {id: uuid(), date: new Date(), text: 'Juice', amount: 100},
      ],
    };
    render() {
      return <WrappedComponent data={this.state.expenses} />;
    }
  }

  return WithInjectedData;
};

export default withData;
