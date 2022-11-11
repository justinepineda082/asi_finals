import {Crud} from "./components/crud/index";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/crud/Login';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Crud/>}/>
        <Route path="/" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;