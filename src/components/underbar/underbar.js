import React from 'react';
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
                        <p className="layer_clcik "> <a href="#">Understand label features</a> </p> 
                        <p>Feedback</p> 
                        </div> 
                    </div>
                    <div className="cnt1_right">
                        <div className="check_label">
                        <p className="sub1">Check another product</p>
                        <p className="sub2 "><a href="https://www.baidu.com/?code=6675697746308516&amp;sign=3ef79e5008bf877b89b80f6463044c8b">Promotional Activity Link</a></p>
                    </div>
                </div>
                <div className="clear"></div>
                </div> 
            );
        }

}

export {UnderBarCommpent}