import React from 'react';
import '../../../static/css/index.css';
import '../../../static/css/front.css';
import {FooterCommpent} from '../../footer/foot.js';
import {UnderBarCommpent} from '../../underbar/underbar.js';

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
            <UnderBarCommpent/>
            <FooterCommpent/>
        </div>
        );
    }

}

export {ExpiredCommpent}
                    
