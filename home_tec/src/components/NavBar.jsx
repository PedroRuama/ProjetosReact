import './nav.css'
import logo from './imgs/logo.svg'
import menu from './imgs/icon-menu.svg'
import Xmenu from './imgs/icon-menu-close.svg'
import { useState } from 'react'; // gerenciar o estado de algum valor (getter e setter) 



function NavBar() {
    const [Ativado, setAtivado] = useState(false); //vaor inicial = falso
    
    return (
        
        <div id='nav'>
            <img src={logo} alt="logo" id='logo' />
            <div id='sombra'style={{display: Ativado ? "flex" : "none"}}></div>
            <div id="nav-itens">
           
                
                {/* mobile menu  */}
                <img src={menu} alt="menu" id='menu' onClick={() => setAtivado(!Ativado)} />

                
                <div id='anteLateral'>
                    <div id='lateral_div' style={{width: Ativado ? "60vw" : "0vw"}}>
                        <div id='Xmenu_div'>
                            <img src={Xmenu} alt="Xmenu" id='Xmenu' onClick={() => setAtivado(!Ativado)} style={{display: Ativado ? "flex" : "none"}}/>
                        </div>
                        <br />
                        <ul id='mob_itens' style={{display: Ativado ? "flex" : "none"}}>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">New</a></li>
                            <li><a href="#">Popular</a></li>
                            <li><a href="#">Trending</a></li>
                            <li><a href="#">Categories</a></li>
                        </ul>
                    </div>
                </div>

                <ul id='itens'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">New</a></li>
                    <li><a href="#">Popular</a></li>
                    <li><a href="#">Trending</a></li>
                    <li><a href="#">Categories</a></li>
                </ul>
            </div>
        </div>
    );

}

export default NavBar;



