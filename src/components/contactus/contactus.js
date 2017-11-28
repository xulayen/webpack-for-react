import React from 'react';
import '../../static/css/front.css';
import '../../static/css/index.css';
import {FooterCommpent} from '../footer/foot.js';

class ContactUsCommpent extends React.Component {

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
                <div>
                    <div className="container">
                        <div className="cn_main feed_main">
                            <div className="cnt"> <p className="cont_first">China.</p><p className="p_code"><span>Tel: </span>+86-21-26095599</p><p className="p_code"><span>Email: </span>shellac@yesno.com.cn</p> </div>
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