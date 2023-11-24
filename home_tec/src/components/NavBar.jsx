import './nav.css'
import logo from './imgs/logo.svg'
import menu from './imgs/icon-menu.svg'
import Xmenu from './imgs/icon-menu-close.svg'
function NavBar() {
    return(
        <div id='nav'>
            <img src={logo} alt="logo" id='logo'/>
            <div id="nav-itens">            
                <img src={menu} alt="menu" id='menu'/>
                <div id='anteLateral'>
                    <div id='lateral_div'>
                        <div id='Xmenu_div'>
                            <img src={Xmenu} alt="menu" id='Xmenu'/>
                        </div>
                        <br />
                        <ul>
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