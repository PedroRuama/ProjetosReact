import { Outlet } from "react-router-dom" //rotas 

function App() {
 

  return (
    <div className="App">
        <div className="coontair">
            <Outlet />
        </div>
    </div>
    
    
  )
}

export default App
