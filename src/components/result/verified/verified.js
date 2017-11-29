import React from 'react';
import '../../../static/css/index.css';
import '../../../static/css/front.css';
import {FooterCommpent} from '../../footer/foot.js';
import {UnderBarCommpent} from '../../underbar/underbar.js';
import {DtsSelectCommpent} from '../../dtsSelect/dtsSelect.js';


class VerifiedCommpent extends React.Component {

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

export {VerifiedCommpent}
                    
