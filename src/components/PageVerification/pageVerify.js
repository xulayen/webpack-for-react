import React from 'react';
import {BrowserRouter,HashRouter, Route, Link,Redirect} from 'react-router-dom';
import ListStore from'../../stores/ListStore.js';

class PageVerifyCommpent extends React.Component {

      constructor(props) {
		super(props);
		this.state={
		  items:ListStore.getAll(),
		  gotoIndex:false,
		  willGo:window.location.hash.replace('#','')
        }
	  }
	

	componentWillMount() {

		if(this.state.items.reply==="-1"){
			this.setState({
				gotoIndex:true,
				willGo:""
			});
		}else if(this.state.willGo!==this.state.items.pathto && 
			this.state.willGo.indexOf('invalid')> -1 &&
			this.state.willGo.indexOf('expired')> -1 &&
			this.state.willGo.indexOf('verified')> -1
		){
			this.setState({
				gotoIndex:true,
				willGo:this.state.items.pathto
			});
		}
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

      render(){
		if(this.state.gotoIndex){
			return <Redirect to={this.state.willGo}/>
		}
		return null;
      }

}

export {PageVerifyCommpent}