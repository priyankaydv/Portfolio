import './App.css';
import Sidebar from './components/Sidebar'
import './components/Sidebar.css';
import Navigation from './components/Navigation';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certificate from './components/Certificate';
import Resume from './components/Resume';
import Topbar from './components/Topbar';

function App() {
  return (
    <Router>
     <div><Topbar/>
     </div>
    <div className="App">
    
    <div className="container">
    
    <div className="row">
    <div className="col-lg-3 ">
   <Sidebar/>
   
    </div>
    <div className="col-lg-9 app__main-content">
    <Navigation/>
    <Route path="/About"><About/></Route>
    <Route path="/Projects"><Projects/></Route>
    <Route path="/Resume"><Resume/></Route>
    <Route path="/Certificate"><Certificate/></Route>
    <Route path="/Skills"><Skills/></Route>
    </div></div>
    </div>
    </div>
    </Router>
  );
}

export default App;
