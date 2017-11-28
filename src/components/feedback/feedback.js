import React from 'react';
import '../../static/css/front.css';
import '../../static/css/index.css';

import {FooterCommpent} from '../footer/foot.js';

class FeedBackCommpent extends React.Component {

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
        <form className="container form" method="post">
                <div className="cn_main">
                    <div className="cnt">
                        <div className="cnt_left">
                            <p className="p_first">
                                Your feedback is important to us.</p>
                            <p>
                                Please complete the form with information about where, when and from whom you purchased this product.</p>
                            <p className="p_code" id="resultCode">
                                <span>
                                    Anti-Counterfeit code:&nbsp;</span>6675 6977 4630 8516</p>
                            <p className="cnt_inpu">
                                <span><strong>
                                    Name:&nbsp;</strong>(Optional)</span><input type="text" id="txtName" maxLength="10"/></p>
                            <p className="cnt_inpu">
                                <span><strong>
                                    Tel:&nbsp;</strong>(Optional)</span><input type="text" id="txtTel" regex="/^[\d\!\@\#\$\%\^\&amp;\*\(\)\_\-\=\+]+$/" logicmsg="Please enter valid phone address" maxLength="11" name="name"/></p>
                            <p className="cnt_inpu">
                                <span><strong>
                                    Email:&nbsp;</strong></span><input type="text" id="txtEmail" name="tel" className="notnull" nullmsg="Please enter valid email address" regex="/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/" logicmsg="Please enter valid email address" placeholder="name@domain.com" maxLength="20"/></p>
                        </div>
                        <div className="cnt_right">
                            <p className="p_first">
                                Feedback</p>
                            <textarea rows="10" className="notnull" id="txtContent" nullmsg="Please enter the content" cols=""></textarea>
                            <div className="tip_text">
                                <p>
                                </p>
                                <p>
                                    Example:I have bought one bottle of 4L Helix Ultra from Auto-parts city, which is located in Road No. 322, HuanStreet. The store contract number is 130-0000-0000. And found that the anti-counterfeit code does not exist. Can you help me? Or let me know the nearest Shell authorised store?</p>
                            </div>
                            <p className="radio_inpu">
                                <label>
                                    <input name="ckAgree" type="checkbox" className="checkbox" nullmsg="Please read the required terms"/>
                                    I have read and understand the Privacy Policy(Please tick)
                                </label>
                            </p>
                            <div className="cnt1 fed_btn">
                                <input type="button" value="Submit" id="btnSubmit" className="inpu_sub check"/>
                                <input type="reset" value="Reset" id="btnReset" className="inpu_res"/>
                                <div className="clear">
                                </div>
                            </div>
                        </div>
                        <div className="clear">
                        </div>
                    </div>
                    <FooterCommpent/>
                </div>
        </form>
            );
        }

}

export {FeedBackCommpent}