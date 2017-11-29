import React from'react';
import ListStore from'../../../stores/ListStore.js';
import {InvalidCommpent} from'./invalid.js';

class InvalidController extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          items:ListStore.getAll()
        }
    }

  componentDidMount() {
    console.log('componentDidMount');
    console.log( )
    ListStore.addChangeListener(this._onChange);
  };

  componentWillUnmount() {
    console.log('componentWillUnmount');
    ListStore.removeChangeListener(this._onChange);
  };

  _onChange () {
    console.log("============InvalidController=================")
   
    this.setState({
      items: ListStore.getAll()
    });
  };



  render() {
      return (
          <InvalidCommpent items={this.state.items} />
      );
  }

};

export {InvalidController}
