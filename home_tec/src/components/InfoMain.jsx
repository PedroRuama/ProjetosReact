
import '../design/InfoMain.css';
import foto from '../design/imgs/image-web-3-desktop.jpg'
import './BoxNew'; // id conter


function info() {
  
  return (
    <div id='infos'>
      
      <img src={foto} alt="foto" id='foto'/>
      <div id='txts'>
        <div id='titulo'>
          <h1>The Bright Future of Web 30?</h1>

        </div>
        <div id='paragrafo'> 
          <p>Mergulhamos na próxima evolução da web
            que afirma colocar o poder das plataformas
            de volta às mãos do povo. Mas é realmente
            cumprindo sua promessa? </p>
            <button id='btn' onClick={contr}>Leia Mais</button>
        </div>

      </div>
    </div>
  );
}


var i = 0;
function contr() {
  document.getElementById('conter').innerHTML = i
  i++
}

export default info;
 