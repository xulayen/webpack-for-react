import React from'react';
import ListStore from'../../../stores/ListStore.js';
import {ExpiredCommpent} from'./expired.js';

class ExpiredController extends React.Component {
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
    console.log("============ExpiredController=================")
   
    this.setState({
      items: ListStore.getAll()
    });
  };



  render() {
      return (
          <ExpiredCommpent items={this.state.items} />
      );
  }

};

export {ExpiredController}
