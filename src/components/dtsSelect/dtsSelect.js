import React from 'react';
import '../../static/css/index.css';
import '../../static/css/front.css';
import sure from '../../static/images/sure.png';
import no from '../../static/images/no.png';
import $ from 'jquery';

class DtsSelectCommpent extends React.Component {


    constructor(props) {
		super(props);
	}
	
	componentWillMount() {

	}

	componentDidMount() {
		//this.selectOption();
	}

	componentWillUnmount() {
	
	}

	selectOption(){
		console.log('selectOption');
		$.post('/SendAcVerifyInfo',{"accode":"111111111","queryid":"11111","feedback":"1"},function(data){
			console.log(data);
		});
	}


	render(){
		return (
			<div className="cnt1_right r_space" className={!this.props.isShowSelectOption?"none":""}>
					
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
		);
	}

}

export {DtsSelectCommpent}