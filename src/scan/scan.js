import '../static/css/scan.css';
import t from '../static/images/1.png';

export default function print() {

    let doc_div= document.createElement('div');
    doc_div.className='cb2';
    doc_div.innerHTML='这是scan!!!!!!!!!!!';


    var img1=document.createElement('img');
    img1.src=t;
    img1.width='100';
    doc_div.appendChild(img1);


    document.body.appendChild(doc_div);
    console.log('scan^^^^^^^^^^^66666666666666');
 };