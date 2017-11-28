import React from 'react';
import '../../static/css/index.css';
import '../../static/css/front.css';
import '../../static/css/slick.css';

class HeaderCommpent extends React.Component {

      constructor(props) {
        super(props);
      }

      render(){
        return (
		<nav>
			<div className="nav">
				<div className="logo">Shell Anti-Counterfeit System</div>
	            <div id="btn" className="btn">
	                <span></span>
	                <span></span>
	                <span></span>
	            </div>
	            <div id="navbar" className="navbar">
	                <ul className="layer_clcik">
	                    <li><a href="#">Understand label features</a></li>
	                </ul>
	            </div>  
			</div>
		</nav>
        );
      }

}

export {HeaderCommpent}