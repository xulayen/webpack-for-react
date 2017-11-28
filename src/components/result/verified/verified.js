import React from 'react';
import '../../../static/css/index.css';
import '../../../static/css/front.css';
import {FooterCommpent} from '../../footer/foot.js';
import {UnderBarCommpent} from '../../underbar/underbar.js';
import sure from '../../../static/images/sure.png';
import no from '../../../static/images/no.png';

class VerifiedCommpent extends React.Component {

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
                <div className="cnt1_left">
                    <div className="result_message">
                        <p className="messageP">
                            
                            <span>
                                Pack size:</span> <span>
                                    18L
                                </span>
                            
                        </p>
                        <p className="messageP">
                            
                            <span>
                                Product name:</span> <span>
                                    Rim R5 NG
                                </span>
                            
                        </p>
                        <p className="messageP">
                            
                        </p>
                        <p className="messageP">
                            
                            <span>
                                Batch number:</span> <span>
                                    11012998C60320170208
                                </span>
                            
                        </p>
                    </div>
                </div>
                <div className="cnt1_right r_space">
                    
                    <div className="cor_replay">
                        <p>
                            Please check whether the product information below matches your purchase</p>
                        <p className="none">
                            Does the above match your purchse?</p>
                        <div className="check_replay">
                            <p className="replaySure">
                                YES</p>
                            <p className="replayNo">
                                NO</p>
                        </div>
                        <div className="resultYes" style={{visibility:"hidden"}}>
                            <img src={sure}/>
                            <p>
                                Thank you for purchasing a genuine Shell Lubricants product</p>
                        </div>
                        <div className="resultNo none">
                            <img src={no}/>
                            <p>
                                <span>Code info is incorrect</span>Please call customer service.</p>
                        </div>
                    </div>
                    
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

export {VerifiedCommpent}
                    
