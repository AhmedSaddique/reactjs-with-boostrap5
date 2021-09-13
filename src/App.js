import './App.css';
import Home from './Home';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';
import {Route , Switch} from 'react-router';


function App() {
  return (
  <>

<Switch>
  <Route exact path="/" component={Home}></Route>
  <Route path="/about" component={About}></Route>
  <Route path="/contact" component={Contact}></Route>
  <Route path="/service" component={Service}></Route>
</Switch>


</>
  );
}

export default App;
