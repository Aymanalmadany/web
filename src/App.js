import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import { BrowserRouter as Router,Switch, Route, Routes } from 'react-router-dom'
import Product from "./Pages/Product";
import About from "./Pages/About";

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>

      <Route path="/product" component={Product} />
      <Route path="/about" component={About} />
      <Route path="/" component={Home} />
      
      </Switch>
    </Router>
    </>
  );
}

export default App;
