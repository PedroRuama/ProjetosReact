import '../design/nav.css'
import logo from '../design/imgs/logo.svg'
function NavBar() {
    return(
        <div id='nav'>
            <img src={logo} alt="logo" id='logo'/>

            <div id="nav-itens">
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