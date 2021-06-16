
import './App.css';
import {BrowserRouter,BrowserRouter as Router,Route } from 'react-router-dom'
import Homepage from './components/homepage'
import Navbarcomponenet from './components/Navbarcomponet'
import Pricing from './components/pricing'
import About from './components/about'
import Footer from './components/footer'

import Project from './components/project'

function App() {
  return (
    <div className="App">

    <BrowserRouter>
    <Navbarcomponenet/>
     <Router>
       <Route path="/" exact component={Homepage}/>
       <Route path="/pricing" exact component={Pricing}/>
       <Route path="/about" exact component={About}/>
       <Route path="/project" exact component={Project}/>
       
     </Router>
    <Footer/>
     </BrowserRouter>
   
    </div>
  );
}

export default App;
