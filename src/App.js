import logo from './logo.svg';
import './App.css';
import { Header } from './Components/header';
import { Footer } from './Components/footer';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import home, { Home } from './Components/home';
import { About } from './Components/about';
import { Blog } from './Components/blog';
import { Portfolio } from './Components/portfolio';
import { Contact } from './Components/contact';
import { Notfound } from './Components/notfound';
import ScrollToTop from './Components/scrolltotop';


function App() {
  return (
    <div className="App">


  <Router>
    <ScrollToTop />
      <Header />
      <Switch >
        
        <Route exact  path="/" component={home} />
        <Route  path="/about" component={About} />
        <Route  path="/blog" component={Blog} />
        <Route   component={Notfound} />


      </Switch>
      <Footer />
     
      </Router>
    </div>
  );
}

export default App;
