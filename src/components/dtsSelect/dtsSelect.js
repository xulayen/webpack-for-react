import React from 'react';
import '../../static/css/index.css';
import '../../static/css/front.css';
import sure from '../../static/images/sure.png';
import no from '../../static/images/no.png';
import $ from 'jquery';

class DtsSelectCommpent extends React.Component {


    constructor(props) {
		super(props);
		this.state={
			selectSure:false,
			selectNo:false
		};
	}
	
	componentWillMount() {

	}

	componentDidMount() {
		//this.selectOption();
		 var dtdFeed=null;
		



	}

	componentWillUnmount() {
	
	}

	selectOption(queryid,feedback){
		console.log('selectOption');
		$.post('/SendAcVerifyInfo',{"accode":"1111111111111111","queryid":queryid,"feedback":feedback},function(data){
			console.log(data);
		});
	}

	selectSure(){
		this.setState({
			selectSure:true,
			selectNo:false
		});
		this.selectOption("111111111111111111111111","1");
	}

	selectNo(){
		this.setState({
			selectNo:true,
			selectSure:false
		})
		this.selectOption("111111111111111111111111","0");
	}

	render(){
		return (
			<div className={!this.props.isShowSelectOption?"none":"cnt1_right r_space"}>
					
					<div className="cor_replay">
						<p>
							Please check whether the product information below matches your purchase</p>
						<p className="none">
							Does the above match your purchse?</p>
						<div className="check_replay">
							<p className="replaySure" onClick={this.selectSure.bind(this)} style={this.state.selectSure?{"background": "rgb(130, 188, 0)","color": "rgb(255, 255, 255)"}:{}}>
								YES</p>
							<p className="replayNo"  onClick={this.selectNo.bind(this)} style={this.state.selectNo?{"background": "rgb(226, 35, 26)","color": "rgb(255, 255, 255)"}:{}}>
								NO</p>
						</div>
						<div className={this.state.selectSure?"resultYes visible":"none"}>
							<img src={sure}/>
							<p>
								Thank you for purchasing a genuine Shell Lubricants product</p>
						</div>
						<div className={this.state.selectNo?"resultNo show":"none"}>
							<img src={no}/>
							<p>
								<span>Product information is not correct, please be aware of inferior counterfeit product</span>
								</p>
						</div>
					</div>
					
				</div>		
		);
	}

}

export {DtsSelectCommpent}