import React from 'react';
import '../../static/css/index.css';
import '../../static/css/front.css';
import {injectIntl,IntlProvider, FormattedMessage,FormattedHTMLMessage} from 'react-intl';


class DtsInfoCommpent extends React.Component {

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
            <div className={!this.props.isShowSelectOption?"none":"result_message"}>
                <p className="messageP">
                    {/* Pack size: */}
                    <FormattedMessage id="dtsPackSize" />
                    <span>
                        {this.props.dts.PackSize}
                    </span>
                </p>
                <p className="messageP">
                    {/* Product name: */}
                    <FormattedMessage id="dtsProductName" />
                    <span>
                        {this.props.dts.ProductName}
                    </span>
                </p>
                <p className="messageP">
                    
                </p>
                <p className="messageP">
                    {/* Batch number: */}
                    <FormattedHTMLMessage id="dtsBatchNum" />
                    <span>
                        {this.props.dts.BatchNumber}
                    </span>
                    
                </p>
            </div>
        );
    }

}

export {DtsInfoCommpent}
                    
