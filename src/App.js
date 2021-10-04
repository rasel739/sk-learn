import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import NavbarNav from './components/NavbarNav/NavbarNav';
import Courses from './components/Courses/Courses';
import About from './components/About/About';
import Feature from './components/Feature/Feature';
import Contact from './components/Contact/Contact';



function App() {
  return (
    <div className="App">
      <Router>
        <NavbarNav></NavbarNav>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/courses">
            <Courses></Courses>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/feature">
            <Feature></Feature>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <ErrorPage></ErrorPage>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
