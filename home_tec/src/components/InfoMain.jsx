
import '../design/InfoMain.css';
import foto from '../design/imgs/image-web-3-desktop.jpg'

function info() {
  return (
    <div id='infos'>
      <img src={foto} alt="foto" id='foto'/>
      <div id='txts'>
        <div id='titulo'>
          <h1>The Bright Future of Web 3.0?</h1>

        </div>
        <div id='paragrafo'> 
          <p>We dive into the next elvolution of web
            that claims to put the  power of the platforms
            back into the hands os the people. But is it really
            fulfilling its promise? </p>
            <button id='btn'>READ MORE</button>
        </div>

      </div>
    </div>
  );
}

export default info;
 