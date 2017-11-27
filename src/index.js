import './styles.css';
import _w from 'jquery_wechat_sdk';
import s from './scan/scan';
import h from './homepage/home';

function component() {
    var element = document.createElement('div');

    element.innerHTML = join(['Hello', 'webpack'], ' ');

    element.onclick=function(){
      console.log(_w);
      console.log(_w.WeChart());
      _w.WeChart().InitWeChat();
    }

    s();
    h();

    return element;
  }

  document.body.appendChild(component());