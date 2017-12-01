import React from'react';
import ListStore from'../../stores/ListStore.js';
import ResultCommpent from'./result.js';

class ResultController extends React.Component {
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
    console.log("============ResultController=================")
   
    this.setState({
      items: ListStore.getAll()
    });
  };



  render() {
      return (
          <ResultCommpent items={this.state.items} />
      );
  }

};

export {ResultController}
