import React from 'react';
import {BrowserRouter,HashRouter, Route, Link} from 'react-router-dom';
import '../../../static/css/index.css';
import '../../../static/css/front.css';
import {FooterCommpent} from '../../footer/foot.js';
import {injectIntl,IntlProvider, FormattedMessage} from 'react-intl';

class InvalidCommpent extends React.Component {

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
          <div className="cn_main">
            <div className="cnt ctt">
                <div className="invalid1">
                    <p>
                        {this.props.items.reply.split('|')[0]}
                    </p>
				</div>
                <div className="cnt1_left">
                    <div className="result_label">
                        <p className="layer_clcik ">
                            <a>
                                {/* Understand label features */}
                                <FormattedMessage id="understandLable"/>
                            </a>
                        </p>
                        
                        <p>
                          <Link to="/feedback">
                          {/* Feedback */}
                          <FormattedMessage id="feedBack"/>
                          </Link>
                        </p>
                        
                    </div>
                </div>
                
                <div className="cnt1_right">
					<div className="check_label">
                        <Link to="/">
                            <p className="sub1 sub3">
                                {/* Try again */}
                                <FormattedMessage id="btnTry"/>
                            </p>
                        </Link>
					</div>
				</div>
                <div className="clear">
                </div>
            </div>


            <FooterCommpent/>

        </div>
        );
    }

}

export {InvalidCommpent}
                    
