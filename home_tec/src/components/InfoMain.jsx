
import './InfoMain.css';
import Deskfoto from './imgs/image-web-3-desktop.jpg'
import Mobfoto from './imgs/image-web-3-mobile.jpg'
import './BoxNew'; // id conter


function info() {
  
  return (
    <div id='infos'>
      
      <img src={Deskfoto} alt="Deskfoto" id='Desk_foto'/>
      <img src={Mobfoto} alt="Mobfoto" id='Mob_foto'/>
      <div id='txts'>
        <div id='titulo'>
          <h1>The Bright Future of Web 3.0?</h1>

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
 