import './nav.css'
import logo from './imgs/logo.svg'
import menu from './imgs/icon-menu.svg'
import Xmenu from './imgs/icon-menu-close.svg'
import { useState } from 'react';



function NavBar() {
    const [isActive, setIsActive] = useState(false);

    return (
        
        <div id='nav'>
            <img src={logo} alt="logo" id='logo' />


            <div id='sombra'></div>
            <div id="nav-itens">
            {/* onClick={() => setIsActive(!isActive)} style={{display: isActive ? "flex" : "none"}}  */}
            {/* onClick={() => setIsActive(!isActive)}  */}
                {/* mobile menu  */}
                <img src={menu} alt="menu" id='menu' onClick={mobMenu}/>
                <div id='anteLateral'>
                    <div id='lateral_div'>
                        <div id='Xmenu_div'>
                            <img src={Xmenu} alt="Xmenu" id='Xmenu' onClick={mobMenu}/>
                        </div>
                        <br />
                        <ul id='mob_itens'>
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
var i = 1;
function mobMenu() {
    var sombra = document.getElementById("sombra")
    var lateral = document.getElementById("lateral_div")
    var itensMenu = document.getElementById("mob_itens")
    var menu = document.getElementById("menu")
    var X = document.getElementById("Xmenu")
    i = i * (-1)

    if (i < 0) {
        menu.style = "display= none";
        sombra.style = "display: block;"
        itensMenu.style = "display: block;"
        lateral.style = "width: 60vw"

    } else {
        menu.style = "display= flex";   
        sombra.style = "display: none;"
        itensMenu.style = "display: none;"
        lateral.style = "width: 0vw"
    }


}


