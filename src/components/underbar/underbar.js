import React from 'react';
import {BrowserRouter,HashRouter, Route, Link} from 'react-router-dom';
import '../../static/css/index.css';
import '../../static/css/front.css';

class UnderBarCommpent extends React.Component {

        constructor(props) {
            super(props);
        }

        componentWillMount() {

        }

        componentDidMount() {

        }

        componentWillUnmount() {

        }

        render(){
            return (
                <div className="cnt"> 
                    <div className="cnt1_left"> 
                        <div className="result_label"> 
                        <p className="layer_clcik "> <a>Understand label features</a> </p> 
                        <p>
                            <Link to="/feedback">Feedback</Link>
                        </p> 
                        </div> 
                    </div>
                    <div className="cnt1_right">
                        <div className="check_label">
                        <Link to="/">
                            <p className="sub1">
                                Check another product
                            </p>
                        </Link>
                        <p className="sub2 "><a href="https://www.baidu.com/?code=6675697746308516&amp;sign=3ef79e5008bf877b89b80f6463044c8b">Promotional Activity Link</a></p>
                    </div>
                </div>
                <div className="clear"></div>
                </div> 
            );
        }

}

export {UnderBarCommpent}