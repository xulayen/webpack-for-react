import React from 'react';
import '../../../static/css/index.css';
import '../../../static/css/front.css';
import {FooterCommpent} from '../../footer/foot.js';
import {UnderBarCommpent} from '../../underbar/underbar.js';
import {DtsSelectCommpent} from '../../dtsSelect/dtsSelect.js';

class ExpiredCommpent extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            dts:null,
            isShowSelectOption:false
        };
    }

    componentWillMount() {
        let _dtsArray=this.props.items.reply.split('|');
        let _lenth=this.props.items.reply.split('|').length;
        let last=_dtsArray[_lenth-1];
        let _dts=JSON.parse(last.replace(/{/g,'{"').replace(/,/g,'","').replace(/:/g,'":"').replace(/}/g,'"}'));


		let hasPropVal=false;
		for(let d in _dts){
			if(_dts[d]){
				hasPropVal=true;
				break;
			}
		}
		this.setState({
            isShowSelectOption:hasPropVal,
            dts:_dts
        });
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render(){
        return (
          <div className="cn_main">
            <div className="cnt ctt">
                
                <div className={this.state.isShowSelectOption?"none":"invalid1"}>
                    <p>
                        {this.props.items.reply.split('|')[0]}
                    </p>
                </div>
                
                <div className="cnt1_left">
                    <div className={!this.state.isShowSelectOption?"none":"result_message"}>
                        <div className="message_left">
                             <p>
                                
                                Pack size:
                            </p>
                            
                            <p>
                                
                                Product name:
                            </p>
                            
                            <p>
                                
                                Batch number:
                            </p>
                        </div>
                        <div className="message_right">
                            <p>
                                {this.state.dts.PackSize}
                            </p>
                            
                            <p>
                                {this.state.dts.ProductName}
                            </p>
                            
                            <p>
                                {this.state.dts.BatchNumber}
                            </p>
                        </div>
                    </div>
                </div>
               
                <DtsSelectCommpent isShowSelectOption={this.state.isShowSelectOption}/>
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
                    
