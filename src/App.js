import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import BandMembers from './components/BandMembers';
import Home from './components/Home';
import LoginRegister from './components/LoginRegister';
import NavBar from './components/NavBar';
import Setlists from './components/Setlists';
import Venues from './components/Venues';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <React.Fragment>
      {isLoggedIn && <NavBar />}
      <BrowserRouter>
        <Routes>
          {!isLoggedIn ? <Route path="/" element={<LoginRegister />} /> : <Route path="/" element={<Home />} />}
          <Route path="/bandmembers" element={<BandMembers />}/>
          <Route path="/setlists" element={<Setlists />}/>
          <Route path="/venues" element={<Venues />}/>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
