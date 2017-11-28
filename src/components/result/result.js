import React from 'react';
import '../../static/css/index.css';
import '../../static/css/front.css';
import first from '../../static/images/oil_1.png';
import many from '../../static/images/oil_2.png';
import invalid from '../../static/images/oil_3.png';

class ResultCommpent extends React.Component {

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
          <div className="banner">
            <div className="ban-slide">
                <div className="inner">
                    <h2 className="red_title">
                        Code invalid</h2>
                    <p>
                        
                        This code does not exist.Please recheck the label to see if you entered the code correctly and try again.
                    </p>
                    <div className="subbtn stt">
                        <p>
                            Your 16-digit Anti-Counterfeit code:</p>
                        <p id="resultCode">
                            3333 3333 3333 3333</p>
                    </div>
                </div>
                <div className="mainbtn">
                    <img src={invalid} alt="oil"/>
                </div>
            </div>
        </div>
        );
    }

}

export {ResultCommpent}
                    
