import React from 'react';
import {BrowserRouter,HashRouter, Route, Link ,Redirect } from 'react-router-dom';
import '../../static/css/index.css';
import '../../static/css/front.css';
import {FooterCommpent} from '../footer/foot.js';
import $ from 'jquery';
import CN from '../../static/images/china.png';
import lable from '../../static/images/animation_2.gif';
import {sliderInit,selectOption,countryList,languageList} from './sliderAndSelect.js';
import Global from '../../static/script/red.js';
import functionUtil from '../../static/script/functionUtil.js';
import ButtonActions from '../../actions/SubmitActions.js';
import loading from '../../static/images/gif/loading.gif';
import {IntlProvider, FormattedMessage} from 'react-intl';
import intl from 'intl';
import ListStore from '../../stores/ListStore.js';

class FormSliderCommpent extends React.Component {

    constructor(props) {
		super(props);
		this.state={
			countryList:countryList(),
			languageList:languageList(),
			txt_code:'',
			pathto:'',
			loading:false,
			currentCountry:'',
			currentNationalflag:'',
			currentLanguage:'',
		}
    }

    componentWillMount() {
		var _self=this;
		let selectL=ListStore.getCurrentLan().toLowerCase();
		_self.state.languageList.forEach(function(l){
			if(l.$.value.split('|')[0]===selectL){
				_self.setState({
					currentLanguage:l.$.text
				})
			}
		});

		var selectC=ListStore.getCurrentCountry();
		_self.state.countryList.forEach(function(c){
			if(c.$.key===selectC.toUpperCase()){
				_self.setState({
					currentCountry:$.trim(c.country),
					currentNationalflag:$.trim(c.countryImg)
				})
			}
			console.log(c);
			
		});


		countryList();
    }

    componentDidMount() {

		sliderInit();
		selectOption();
		//动态设置防伪码输入框的margin-top值
		var ht = $(".cnt_left").height();
		var inpu_margin = ht - $(".limitWidth").eq(0).height() - $(".limitWidth").eq(1).height() - 45;
		$(".inpt").css("margin-top", inpu_margin + "px");
		this.submit(this);
	}
	

    componentWillUnmount() {

	}

	submit(_self){
		Global.Init();
		//按钮回调函数
		var _lock = true; //解锁
		//提交按钮回调函数
		Global.submitCallback = function (eve) {
			(function () {
				if (_lock) {
					_lock = false; //加锁
					console.log(_self.state.txt_code);
					
					_self.setState({
						loading:true
					});

					$.post('/fw',{"accode":_self.state.txt_code},function(data){
						console.log(data);
						_lock = true; //解锁
						var code = _self.state.txt_code;
						var _pathto='/invalid';
						var systemState=data.systemState;
						var reply = data.reply; //配置的答复
                        switch (systemState) {
                            //首次查询                                                                                                                                                                                                                                                                                                                         
                            case "10020401": //新平台
                            case "001": //老平台
								_pathto="/verified";
                                break;
                            //复查                                                                                                                                                                                                                                                                                                                         
                            case "10020402": //新平台
                            case "002": //老平台
								_pathto="/verified";
                                break;
                            //超次查询:                                                                                                                                                                                                                                                                                                                         
                            case "10020301": //新平台
                            case "003": //老平台
                                //开始
								_pathto="/expired";
                                break;
                            //系统异常、eap网络繁忙                                                               
                            case "00000102":
                            case "008":
                            case "004":
                            case "007":
                            case "006":
                            case "101":
							case "102":
							
                                break;                                                                                                                                                                                                                                                                                                                        
							case "00002":
								alert('Sorry, the network is busy, please try again later!');
                                break;
							default:
								_pathto="/invalid";
                                break;
                        }


						
		//				HashRouter.hashHistory.push('/invalid');
						ButtonActions.submitFwCode(reply,data.systemState,code,_pathto,data.message);
						_self.setState({redirect: true,pathto:_pathto,loading:false});  
					})
				}
			})();
		};
	}

	handleData(e) {
		var _self=this;
		var eleId = e.target.id;
		if (eleId == 'txtCode') {
            _self.setState({
                txt_code: e.target.value
            })

        }
	}
	

	changeLan(e){
		var lan=e.$.value.split('|')[0];
		ButtonActions.changeLan(lan);
		window.location.reload();
	};

	changeCountry(e){
		console.log(e)
		ButtonActions.changeCountry(e.$.key);
		this.setState({
			currentNationalflag:$.trim(e.countryImg)
		})
		window.location.reload();
	};



	


    render(){
		if (this.state.redirect) {  
			return <Redirect to={this.state.pathto} />; 
		} 
        return (
			<form className="container form" method="get">
				<div id="loading-mask" className={!this.state.loading?"none":"loading-mask"}>
				</div>
				<div id="loading" className={!this.state.loading?"none":"loading"}>
					<img src={loading}/>
				</div>

				<div className="cn_main">
					<h2 className="title">
						{/* WELCOME */}
						<FormattedMessage id="welcome" />
					</h2>
					<div className="cnt">
						<div className="cnt_left">
							<p className="text">
								<FormattedMessage id="welcomeNotice1" />
								<FormattedMessage id="welcomeNotice2" />
							</p>
							<div className="u_sle">
								<p className="list_title">
									<span>
										{/* Select Country */}
										<FormattedMessage id="selectCountry" />
									</span>
									<span>
										{/* Select Language */}
										<FormattedMessage id="selectLan" />
									</span>
								</p>
								<div className="select_country">
									<div className="country_left" >
										<div className="select_left" id="_country"></div>
										<p className="country_img"><img src={this.state.currentNationalflag} /></p>
										<p className="country" id="count">{this.state.currentCountry}</p>
										<input type="hidden" value="" id="currentCountry"/>
									</div>
									<div className="country_right">
										<div className="select_left" id="_language"></div>
										<p className="select_language">{this.state.currentLanguage}</p>
										<input type="hidden" value="" id="currentLanguage"/>
									</div>
								</div>
							</div>
							<div className="countryContainer none">
								<ul className="select_flag" id="flags">
									{this.state.countryList.map((ele)=>
										<li key={ele.$.key} onClick={this.changeCountry.bind(this,ele)}>
											<img src={ele.countryImg} />
											{ele.country}
										</li>
									)}
								</ul>
							</div>
							<div className="countryContainer1 none">
								<ul id="_select" className="_select">
									{this.state.languageList.map((ele)=>
										<li onClick={this.changeLan.bind(this,ele)} className={ele.$.value} key={ele.$.value}>{ele.$.text}</li>
									)}
								</ul>
							</div>
						</div>
						
						<div className="cnt_right">
							<p className="limitWidth">
								{/* Enter the 16-digit Anti-Counterfeit code: */}
								<FormattedMessage id="tipInputDigitCode" />
							</p>
							<p style={{fontWeight:"bold"}} className="limitWidth">
							   {/*PLEASE UNCOVER LABEL to find 16 digit Anti-Counterfeit Code */}
							   <FormattedMessage id="openLabelNotice" />
							</p>
							<FormattedMessage id="tipInputPlaceHolder" >
							{(txt1)=>(
									<FormattedMessage id="t0x00010208" >
									{(txt2)=>(
										<FormattedMessage id="t0x00010207" >
										{(txt3)=>(
											<input type="text" id="txtCode" name="inpt" 
												onChange={this.handleData.bind(this)} 
												className="inpt notnull" 
												placeholder={txt1}
												nullmsg={txt2}
												regex="/^\d{16}$/" 
												logicmsg={txt3}
												maxLength="16"/>
										)}
										</FormattedMessage>
									)}
									</FormattedMessage>
							)}
							</FormattedMessage>
							

							<p className="err_tip _hidden">
 								 <FormattedMessage id="t0x00010207" />
                        	</p>
							<div className="gif">
								<img src={lable} />
							</div>
						</div>	
						<div className="clear"></div>
					</div>
					<div className="cnt1">
						<p>
							&nbsp;
						</p>
						<div className="cnt1_left">
							<div className="slide_cnt index-below-action">
								<div id="slider" className="slider left">
					                <div id="pageSlide">
										<FormattedMessage id="t0x00010209" >
										{(txt)=>(
											<input id="captcha" className="valid" type="hidden" validmsg={txt} value="0"/>
										)}
										</FormattedMessage> 
					                    <span id="label" className="label"></span>

										<FormattedMessage id="tipHasSlidered">
											{(txt2)=>(
											<FormattedMessage id="tipNoSlider">
												{(txt)=>(
													<span id="lableTip" hasslider={txt2} noslider={txt}>
														{/* Slide to confirm you are human! */}
														<FormattedMessage id="tipNoSlider" />
													</span>
												)}
											</FormattedMessage> 
											)}
										</FormattedMessage> 
					                </div>
					            </div>
							</div>
						</div>
						<div className="cnt1_right">
							<FormattedMessage id="tipSubmit">
								{(txt)=>(
									<input type="button" value={txt} className="check  sub"/>
								)}
							</FormattedMessage> 
						</div>
						<div className="clear"></div>
					</div>


                    <FooterCommpent/>



				</div>
				
			</form>
        );
    }

}

export {FormSliderCommpent}