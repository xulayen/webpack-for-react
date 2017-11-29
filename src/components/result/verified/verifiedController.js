import React from'react';
import ListStore from'../../../stores/ListStore.js';
import {VerifiedCommpent} from'./verified.js';

class VerifiedController extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          items:ListStore.getAll()
        }
    }

  componentDidMount() {
    console.log('componentDidMount');
    ListStore.addChangeListener(this._onChange);
  };

  componentWillUnmount() {
    console.log('componentWillUnmount');
    ListStore.removeChangeListener(this._onChange);
  };

  _onChange () {
    console.log("============VerifiedController=================");
    this.setState({
      items: ListStore.getAll()
    });
  };



  render() {
      return (
          <VerifiedCommpent items={this.state.items} />
      );
  }

};

export {VerifiedController}
