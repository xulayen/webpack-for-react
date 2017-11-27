import '../static/css/home.css';


export default function print() {

    let doc_div= document.createElement('div');
    doc_div.className='cb1';
    doc_div.innerHTML='这是homepage!!!!!!!!!!!';
  document.body.appendChild(doc_div);
   console.log('home^^^^^^^^^^^');
 };