import React from 'react';
import '../../static/css/index.css';
import '../../static/css/front.css';
import {FooterCommpent} from '../footer/foot.js';
import $ from 'jquery';
import lable from '../../static/images/animation_2.gif';
import CN from '../../static/images/China.png';
import IQ from '../../static/images/Iraq.png';
import ID from '../../static/images/Indonesia.png';
import RU from '../../static/images/Russian.png';
import KZ from '../../static/images/SaudiaArabia.png';
import UK from '../../static/images/uk.png';
import {sliderInit,selectOption,countryList,languageList} from './sliderAndSelect.js';




class FormSliderCommpent extends React.Component {

    constructor(props) {
		super(props);
		this.state={
			countryList:countryList(),
			languageList:languageList()
		}
    }

    componentWillMount() {
		countryList();
    }

    componentDidMount() {
		sliderInit();
		selectOption();
    }

    componentWillUnmount() {

	}
	


    render(){
        return (
			<form className="container" method="post">
				<div className="cn_main">
					<h2 className="title">WELCOME</h2>
					<div className="cnt">
						<div className="cnt_left">
							<p className="text">
								Thank you for purchasing a Shell Lubricants Product.<br/>
								Please use our Anti-Counterfeit system to verify its authenticity.
							</p>
							<div className="u_sle">
								<p className="list_title">
									<span>Select Country</span>
									<span>Select Language</span>
								</p>
								<div className="select_country">
									<div className="country_left" >
										<div className="select_left" id="_country"></div>
										<p className="country_img"><img src={CN} /></p>
										<p className="country" id="count">China</p>
										<input type="hidden" value="" id="currentCountry"/>
									</div>
									<div className="country_right">
										<div className="select_left" id="_language"></div>
										<p className="select_language">Mandarin</p>
										<input type="hidden" value="" id="currentLanguage"/>
									</div>
								</div>
							</div>
							<div className="countryContainer none">
								<ul className="select_flag" id="flags">
									{this.state.countryList.map((ele)=>
										<li key={ele.$.key}>
											<img src={ele.countryImg} />
											{ele.country}
										</li>
									)}
								</ul>
							</div>
							<div className="countryContainer1 none">
								<ul id="_select" className="_select">
									{this.state.languageList.map((ele)=>
										<li className={ele.$.value} key={ele.$.value}>{ele.$.text}</li>
									)}
								</ul>
							</div>
						</div>
						
						<div className="cnt_right">
							<p className="limitWidth">Enter the 16-digit Anti-Counterfeit code:</p>
							<p style={{fontWeight:"bold"}} className="limitWidth">PLEASE UNCOVER LABEL to find
							   16 digit Anti-Counterfeit Code
							</p>
							<input type="text" name="inpt" placeholder="Scan the QR code to skip manual input" className="inpt" maxLength="16" id="inpt"/>
							<p className="err_tip">ERROR! You have entered an incorrect code.(Please try again)</p>
							<div className="gif">
								<img src={lable} />
							</div>
						</div>	
						<div className="clear"></div>
					</div>
					<div className="cnt1">
						<p>Real person confirmation</p>
						<div className="cnt1_left">
							<div className="slide_cnt index-below-action">
								<div id="slider" className="slider left">
					                <div id="pageSlide">
					                    <input id="captcha" className="valid" type="hidden" validmsg="请向右滑动。" value="0"/>
					                    <span id="label" className="label"></span>
					                    <span id="lableTip" hasslider="Thank you!" noslider="SLIDE to confirm you are human!">SLIDE to confirm you are human!</span>
					                </div>
					            </div>
							</div>
						</div>
						<div className="cnt1_right">
							<input type="button" value="Submit" className="sub"/>
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