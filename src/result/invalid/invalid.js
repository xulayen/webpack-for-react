import React from 'react';
import '../../static/css/index.css';
import '../../static/css/front.css';
import {FooterCommpent} from '../../footer/foot.js';

class InvalidCommpent extends React.Component {

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
                                This code does not exist.Please recheck the label to see if you entered the code correctly and try again.
                    </p>
				</div>
                <div className="cnt1_left">
                    <div className="result_label">
                        <p className="layer_clcik ">
                            
                            <a href="#">
                                Understand label features
                            </a>
                        </p>
                        
                        <p>
                            
                            Feedback
                        </p>
                        
                    </div>
                </div>
                
                <div className="cnt1_right">
					<div className="check_label">
						<p className="sub1 sub3" onclick="location.href='index.aspx'">Try again</p>
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

export {InvalidCommpent}
                    
