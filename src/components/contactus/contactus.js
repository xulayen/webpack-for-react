import React from 'react';
import '../../static/css/front.css';
import '../../static/css/index.css';
import ListStore from '../../stores/ListStore.js';
import {FooterCommpent} from '../footer/foot.js';
import {injectIntl,IntlProvider, FormattedMessage,FormattedHTMLMessage} from 'react-intl';

class ContactUsCommpent extends React.Component {

        constructor(props) {
            super(props);
            this.state={
                currentCounrty:ListStore.getCurrentLan().split('-')[1].toUpperCase()
            }
        }

        componentWillMount() {
            
        }

        componentDidMount() {

        }

        componentWillUnmount() {

        }

        render(){
            return (
                <div>
                    <div className="container">
                        <div className="cn_main feed_main">
                            <div className="cnt"> <p className="cont_first">
                                {/* China. */}
                                <FormattedMessage id={this.state.currentCounrty}/>
                                </p>
                                <p className="p_code"><span>
                                    {/* Tel:  */}
                                    <FormattedMessage id="tel"/>
                                </span>+86-21-26095599</p>
                                <p className="p_code"><span>
                                    {/* Email:  */}
                                    <FormattedMessage id="email"/>
                                    </span>shellac@yesno.com.cn</p> </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <FooterCommpent/>
                    </div>
                </div>
            );
        }

}

export {ContactUsCommpent}