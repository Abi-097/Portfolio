import './App.css';
// import CoverPage from './Components/Pages/Main';
import { CoverPage } from './Components/Pages/Main';
import React from 'react';
import Working from './Components/Pages/Work';
import Education from './Components/Pages/Education';
import MiniProjects from './Components/Pages/Mini_projects';
import Certificates from './Components/Pages/Certificates';
import Extra from './Components/Pages/Extra';
function App() {
  return (
    <div>
    <div className="backGround">
    <div className="backGround-overlay"> 
    <div className="backGround-after_overlay">
    <CoverPage/>
    <Working/>
    <Education/>
    <Certificates/>
    <MiniProjects/>
    <Extra/>
    </div>
    </div>
    </div>
    </div>
  );
}

export default App;
