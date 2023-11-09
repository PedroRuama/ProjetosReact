import './design/index.css';
import NavBar from './components/NavBar';
import Info from './components/InfoMain';
import BoxNew from './components/BoxNew'

function App() {
    return(
        <div> 
            <NavBar />
            <div id='conteudo'>
                <Info />
                <BoxNew />
            </div>
        </div>
    );
}
export default App;