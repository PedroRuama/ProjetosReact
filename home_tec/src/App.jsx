import './App.css';
import NavBar from './components/NavBar';
import Info from './components/InfoMain';
import BoxNew from './components/BoxNew';
import Bottom from './components/Bottom';

function App() {
    return(
        <div id='corpo'> 
            <NavBar />
            <div id='conteudo'>
                <Info />
                <BoxNew />
            </div>
            <Bottom />
        </div> 
    );
}
export default App; 