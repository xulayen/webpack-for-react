import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,HashRouter, Route, Link,Redirect} from 'react-router-dom';
import {BannerCommpent} from './components/banner/banner.js';
import {HeaderCommpent} from './components/header/header.js';
import {FormSliderCommpent} from './components/slider/form-slider.js';
import {ResultCommpent} from './components/result/result.js';
import {ResultController} from './components/result/resultController.js';
import {InvalidCommpent} from './components/result/invalid/invalid.js';
import {InvalidController} from './components/result/invalid/invalidController.js';
import {ExpiredCommpent} from './components/result/expired/expired.js';
import {ExpiredController} from './components/result/expired/expiredController.js';
import {VerifiedCommpent} from './components/result/verified/verified.js';
import {VerifiedController} from './components/result/verified/verifiedController.js';
import {FeedBackCommpent} from './components/feedback/feedback.js';
import {ContactUsCommpent} from './components/contactus/contactus.js';
import {PageVerifyCommpent} from './components/PageVerification/pageVerify.js';


var div_content=document.createElement('div');
div_content.id="content";
document.body.appendChild(div_content);

const getConfirmation = (message, callback) => {
  const allowTransition = window.confirm(message)
  callback(allowTransition)
}

function yourCallBack(){
    alert('11111111');
}


const supportsHistory = 'pushState' in window.history


const App = () => (
  <HashRouter basename="/">
    <div>
      <Link to="/">home</Link>
      <br/>
      <Link to="/about/12?name=minooo">about</Link>
      <br/>
      <Link to="/contact">contact</Link>
      <br/>
      <Link to="/other/react/router">other</Link>
      <br/>
      <Link to="/another/2017-04-02.html">another</Link>
      <br/>
      <Link to="/query/user?id=123&name=minooo">query1</Link>
      <br/>
      <Link 
        to={{pathname: '/query/user', search: '?id=456&name=minooo'}}
        >query2</Link>
        <br/>
      <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/about/:id" render={({history,location,match}) => <h1>{console.log(history,location,match)}
          About
          <span onClick={() => {history.push('/', {name:'mm'})}}>click me</span>
        </h1>} />
      <Route path="/contact" children={({match}) => match && <h1>Contact</h1> } />
      <Route path="/other/:page?/:subpage?" render={({ match }) => (
        <h1>
          PAGE: {match.params.page}<br/>
          SUBPAGE: {match.params.subpage}
        
        </h1>
      )} />
      </div>
      
      <Route path="/another/:a(\d{4}-\d{2}-\d{2}):b(\.[a-z]+)" render={({ match }) => (
        <h1>
          paramA: {match.params.a}<br/>
          paramB: {match.params.b}
        </h1>
      )} />
      <Route path='/query/user' render={({match, location}) => (
        <div>
          <p>query</p>
          <p>match:{JSON.stringify(match)}</p>
          <p>location:{JSON.stringify(location)}</p>
          <p>id:{new URLSearchParams(location.search).get('id')}</p>
          <p>name:{new URLSearchParams(location.search).get('name')}</p>
        </div>
      )} />
    </div>
  </HashRouter>
)


const MenuRouter=()=>(
    <HashRouter basename="/">
      <div>

        {/* <Route render={(match,location)=>(
            <PageVerifyCommpent/>
        )}/> */}

        <Route exact path="/"  render={(match,location)=>(
            <div className="main">
                <HeaderCommpent/>
                <BannerCommpent/>
                <FormSliderCommpent/>
            </div>
        )} />

        <Route exact path="/verified" render={(match,location)=>(
            <div className="main">
                <PageVerifyCommpent/>
                <HeaderCommpent/>
                <ResultController/>
                <VerifiedController/>
            </div>
        )}/>

        <Route exact path="/invalid" render={(match,location)=>(
            <div className="main">
                <PageVerifyCommpent/>
                <HeaderCommpent/>
                <ResultController/>
                <InvalidController/>
            </div>
        )}/>

        <Route exact path="/expired" render={(match,location)=>(
            <div className="main">
                <PageVerifyCommpent/>
                <HeaderCommpent/>
                <ResultController/>
                <ExpiredController/>
            </div>
        )}/>

        <Route exact path="/feedback" render={(match,location)=>(
            <div className="main">
                <PageVerifyCommpent/>
                <HeaderCommpent/>
                <BannerCommpent/>
                <FeedBackCommpent/>
            </div>
        )}/>

        <Route exact path="/contact" render={(match,location)=>(
            <div className="main">
                <PageVerifyCommpent/>
                <HeaderCommpent/>
                <BannerCommpent/>
                <ContactUsCommpent/>
            </div>
        )}/>

      </div>
    </HashRouter>
);

ReactDOM.render(
    (<MenuRouter/>)
    , div_content);



