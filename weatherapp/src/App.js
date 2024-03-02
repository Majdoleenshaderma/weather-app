import logo from './logo.svg';

import Login from './Login';
import Reg from './reg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WeatherApp from './weatherApp';
import NavBar from './NavBar';
import Profile from './profile';



function App() {
  return (
    <div className="App">


      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/reg' element={<Reg />} />
          <Route path='/weatherApp' element={<NavBar />} >
            <Route path='weather' element={<WeatherApp />} />
            <Route path='profile' element={<Profile />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;  
