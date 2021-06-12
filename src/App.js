
import './App.css';
import {BrowserRouter,BrowserRouter as Router,Route } from 'react-router-dom'
import Homepage from './components/homepage'
import Navbarcomponenet from './components/Navbarcomponet'
import Pricing from './components/pricing'
import About from './components/about'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
<Navbarcomponenet/>
    <BrowserRouter>
     <Router>
       <Route path="/" exact component={Homepage}/>
       <Route path="/pricing" exact component={Pricing}/>
       <Route path="/about" exact component={About}/>
     </Router>
     </BrowserRouter>
     <Footer/>
    </div>
  );
}

export default App;
