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
        let _dtsArray=this.props.items.reply.split('|');
        let _lenth=this.props.items.reply.split('|').length;
        let last=_dtsArray[_lenth-1];
        let _dts=JSON.parse(last.replace(/{/g,'{"').replace(/,/g,'","').replace(/:/g,'":"').replace(/}/g,'"}'));
        this.setState({
            dts:_dts
        })
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
                                    {this.state.dts.PackSize}
                                </span>
                            
                        </p>
                        <p className="messageP">
                            
                            <span>
                                Product name:</span> <span>
                                    {this.state.dts.ProductName}
                                </span>
                            
                        </p>
                        <p className="messageP">
                            
                        </p>
                        <p className="messageP">
                            
                            <span>
                                Batch number:</span> <span>
                                    {this.state.dts.BatchNumber}
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
                    
