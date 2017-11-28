import React from 'react';
import {BrowserRouter,HashRouter, Route, Link} from 'react-router-dom';
import '../../static/css/index.css';
import '../../static/css/front.css';
import banner_1 from '../../static/images/banner_1.png';
import banner_2 from '../../static/images/banner_2.png';
import banner_3 from '../../static/images/banner_3.png';
import banner_4 from '../../static/images/banner_4.png';
import banner_5 from '../../static/images/banner_5.png';
import banner_6 from '../../static/images/banner_6.png';
import Swiper from 'swiper';
import $ from 'jquery';
import '../../static/script/slick.min.js';

class FooterCommpent extends React.Component {

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
                <p className="contact">
                    <Link to="/contact">Contact us |</Link>
                    <a href="#">Privacy Policy | </a>
                    <a href="#">Terms & Conditions</a>
                </p>
                <p className="t_url">
                    <span>&copy; 2014 Shell.All rights reserved.</span>
                    <span><a href="http://www.ac.shell.com">www.ac.shell.com</a></span>
                </p>
            </div>
        );
    }

}

export {FooterCommpent}
                    
