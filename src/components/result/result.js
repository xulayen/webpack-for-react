import React from 'react';
import '../../static/css/index.css';
import '../../static/css/front.css';
import many from '../../static/images/oil_1.png';
import first from '../../static/images/oil_2.png';
import invalid from '../../static/images/oil_3.png';

class ResultCommpent extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            Img_Oil:null,
            Total_result:''
        };
    }

    componentWillMount() {
        console.log(this.props.items);
        var _img=invalid,_total_result='';
        if(this.props.items.pathto==='/invalid'){
            _img=invalid;
            _total_result='Code Invalid';
        }else if(this.props.items.pathto==='/verified'){
            _img=first;
            _total_result='Code Verified';
        }else if(this.props.items.pathto==='/expired'){
            _img=many;
            _total_result='Code Expired';
        }

        this.setState({
            Img_Oil:_img,
            Total_result:_total_result
        })
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
                    <h2 className={this.props.items.pathto!=='/verified'?"red_title":""}>
                        {this.state.Total_result}</h2>
                    <p>
                         {this.props.items.reply.split('|')[0]} 
                    </p>
                    <div className="subbtn stt">
                        <p>
                            Your 16-digit Anti-Counterfeit code:</p>
                        <p id="resultCode">
                             {this.props.items.accode} </p>
                    </div>
                </div>
                <div className="mainbtn">
                    <img src={this.state.Img_Oil} alt="oil"/>
                </div>
            </div>
        </div>
        );
    }

}

export {ResultCommpent}
                    
