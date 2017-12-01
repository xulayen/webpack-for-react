import React from 'react';
import '../../static/css/front.css';
import '../../static/css/index.css';
import {injectIntl,IntlProvider, FormattedMessage,FormattedHTMLMessage} from 'react-intl';
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
                                {/* Your feedback is important to us. */}
                                <FormattedMessage id="feedTitle"/>
                            </p>
                            <p>
                                {/* Please complete the form with information about where, when and from whom you purchased this product. */}
                                <FormattedMessage id="feedDes"/>
                            </p>
                            <p className="p_code" id="resultCode">
                                <span>
                                    <FormattedHTMLMessage id="feedCode"/>
                                </span>6675 6977 4630 8516</p>
                            <p className="cnt_inpu">
                                    <FormattedHTMLMessage id="feedName"/>
                                    <input type="text" id="txtName" maxLength="10"/></p>
                            <p className="cnt_inpu">
                                    <FormattedHTMLMessage id="feedTel"/>

                                    <FormattedHTMLMessage id="feedTel">
                                        {(txt)=>(
                                            <input type="text" id="txtTel" 
                                            regex="/^[\d\!\@\#\$\%\^\&amp;\*\(\)\_\-\=\+]+$/" 
                                            logicmsg={txt}
                                            maxLength="11" name="name"/>
                                        )}
                                    </FormattedHTMLMessage>
                            
                            </p>

                            <p className="cnt_inpu">
                                    <FormattedHTMLMessage id="feedEmail"/>
                                    <input type="text" id="txtEmail" name="tel" className="notnull" nullmsg="Please enter valid email address" regex="/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/" logicmsg="Please enter valid email address" placeholder="name@domain.com" maxLength="20"/></p>
                        </div>
                        <div className="cnt_right">
                            <p className="p_first">
                                <FormattedMessage id="feedBack"/>
                                </p>
                            <textarea rows="10" className="notnull" id="txtContent" nullmsg="Please enter the content" cols=""></textarea>
                            <div className="tip_text">
                                <p>
                                </p>
                                <p>
                                    {/* Example:I have bought one bottle of 4L Helix Ultra from Auto-parts city, which is located in Road No. 322, HuanStreet. The store contract number is 130-0000-0000. And found that the anti-counterfeit code does not exist. Can you help me? Or let me know the nearest Shell authorised store? */}
                                    <FormattedMessage id="feedBackPlaceHolder"/>
                                </p>
                            </div>
                            <p className="radio_inpu">
                                <label>
                                    <input name="ckAgree" type="checkbox" className="checkbox" nullmsg="Please read the required terms"/>
                                    <FormattedMessage id="feedTick"/>
                                </label>
                            </p>
                            <div className="cnt1 fed_btn">
                                 <FormattedMessage id="feedSubmit">
                                     {(txt)=>(
                                        <input type="button" value={txt} id="btnSubmit" className="inpu_sub check"/>
                                     )}
                                 </FormattedMessage>
                                 <FormattedMessage id="feedReset">
                                     {(txt)=>(
                                        <input type="reset" value={txt} id="btnReset" className="inpu_res"/>
                                     )}
                                </FormattedMessage>
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