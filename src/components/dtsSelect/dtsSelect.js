import React from 'react';
import '../../static/css/index.css';
import '../../static/css/front.css';
import sure from '../../static/images/sure.png';
import no from '../../static/images/no.png';
import $ from 'jquery';
import ListStore from '../../stores/ListStore.js';

class DtsSelectCommpent extends React.Component {


    constructor(props) {
		super(props);
		this.state={
			selectSure:false,
			selectNo:false,
			Items:ListStore.getAll(),
			Code_Guid:localStorage.getItem('Code-Guid'),
			hasSelectedYes:(localStorage.getItem('Code-Guid')==='1')?true:false
		};
	}
	
	componentWillMount() {
		if(this.state.Code_Guid!=''){
			if(this.state.hasSelectedYes){
				this.showYes();
			}else{
				this.showNo();
			}
		}
	}

	componentDidMount() {

	}

	componentWillUnmount() {
		localStorage.setItem('Code-Guid','');
	}

	selectOption(feedback){
		console.log('selectOption');
		var accode=this.state.Items.accode.replace(/\s+/g, "");
		$.post('/SendAcVerifyInfo',{"accode":accode,"queryid":this.state.Items.queryid,"feedback":feedback},function(data){
			console.log(data);
		});
	}

	selectSure(e){
		if(this.state.Code_Guid==''){
			this.showYes();
			localStorage.setItem('Code-Guid','1');
			this.selectOption("1");

			this.setState({
				Code_Guid:localStorage.getItem('Code-Guid')
			})
		}
	}

	selectNo(e){
		if(this.state.Code_Guid==''){
			this.showNo();
			localStorage.setItem('Code-Guid','0');
			this.selectOption("0");
			this.setState({
				Code_Guid:localStorage.getItem('Code-Guid')
			})
		}
	}

	showYes(){
		this.setState({
			selectSure:true,
			selectNo:false
		});
	}

	showNo(){
		this.setState({
			selectNo:true,
			selectSure:false
		});
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