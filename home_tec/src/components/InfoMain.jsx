
import { useState } from 'react'; // gerenciar o estado de algum valor (getter e setter) 
import './InfoMain.css';
import Deskfoto from './imgs/image-web-3-desktop.jpg'
import Mobfoto from './imgs/image-web-3-mobile.jpg'
import './BoxNew'; // id conter


function Info() {
  
  const [numero, setNumero] = useState(0); // inicial 0 = numero
  const mudarnumero = () => {
    setNumero(numero + 1);
    // setNumero((prevNumero) => prevNumero + 1)    modo mais correto que acessa o valor anterior, podendo alterar mais de uma vez por click
  }

  return (
    <div id='infos'>
      <img src={Deskfoto} alt="Deskfoto" id='Desk_foto' />
      <img src={Mobfoto} alt="Mobfoto" id='Mob_foto' />
      <div id='txts'>
        <div id='titulo'>
          <h1>The Bright Future of Web 3. {numero} ?</h1>

        </div>
        <div id='paragrafo'>
          <p>Mergulhamos na próxima evolução da web
            que afirma colocar o poder das plataformas
            de volta às mãos do povo. Mas é realmente
            cumprindo sua promessa? </p>

          <button id='btn' onClick={mudarnumero}>Leia Mais</button>
        </div>

      </div>
    </div>
  );
}


export default Info;
