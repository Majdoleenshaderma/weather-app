import logo from './logo.svg';

import Login from './Login';
import Reg from './reg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WeatherApp from './weatherApp';



function App() {
  return (
    <div className="App">


      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/reg' element={<Reg />} />
          <Route path='/weatherApp' element={<WeatherApp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;  
