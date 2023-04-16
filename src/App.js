import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Component/NavBar';
import Home from './Component/Home';
import Catalogo from './Component/Catalogo';
import Inf from './Component/Inf';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path= '/' element={<Home/>}/>
        <Route path= '/catalogo' element={<Catalogo/>}/>
        <Route path= '/inf' element={<Inf/>}/>
      </Routes>
    </div>
  );
}

export default App;
