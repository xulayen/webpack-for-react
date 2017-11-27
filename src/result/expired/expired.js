import React from 'react';
import '../../static/css/index.css';
import '../../static/css/front.css';
import {FooterCommpent} from '../../footer/foot.js';

class ExpiredCommpent extends React.Component {

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
          <div className="cn_main">
            <div className="cnt ctt">
                
                <div className="invalid1">
                    <p>
                        
                        This code is correct but has already been used many times before.
                    </p>
                </div>
                
                <div className="cnt1_left">
                    <div className="result_message">
                        <div className="message_left">
                            
                        </div>
                        <div className="message_right">
                            
                        </div>
                    </div>
                </div>
               
                <div className="cnt1_right">
                    
                </div>
                <div className="clear">
                </div>
            </div>
            <div className="cnt">
                <div className="cnt1_left">
                    <div className="result_label">
                        <p className="layer_clcik ">
                            
                            <a href="#">
                                Understand label features
                            </a>
                        </p>
                        
                        <p onclick="window.open('feedback.aspx','_blank');">
                            
                            Feedback
                        </p>
                        
                    </div>
                </div>
                <div className="cnt1_right">
                    <div className="check_label">
                        <p className="sub1" onclick="location.href='index.aspx'">
                            Check another classNameNamect</p>
                        <p className="sub2 ">
                            <a href="https://www.baidu.com/?code=0371790102883513&amp;sign=c8113f6bcae58658881a6321f5a45621">
                                Promotional Activity Link</a>
                        </p>
                    </div>
                </div>
                <div className="clear">
                </div>
            </div>
            <FooterCommpent/>
        </div>
        );
    }

}

export {ExpiredCommpent}
                    
