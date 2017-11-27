import React from 'react';
import '../static/css/index.css';
import '../static/css/front.css';
import '../static/css/slick.css';

class HeaderCommpent extends React.Component {

      constructor(props) {
        super(props);
      }

      render(){
        return (
		<nav>
			<div className="nav">
				<div className="logo">壳牌防伪查询系统</div>
	            <div id="btn" className="btn">
	                <span></span>
	                <span></span>
	                <span></span>
	            </div>
	            <div id="navbar" className="navbar">
	                <ul className="layer_clcik">
	                    <li><a href="#">了解标签特征</a></li>
	                </ul>
	            </div>  
			</div>
		</nav>
        );
      }

}

export {HeaderCommpent}