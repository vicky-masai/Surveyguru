import './App.css';
import Footer from './component/Footer';
import Hero from './component/Hero';
// import Loading from './component/Loading';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Pricing from './component/Pricing';
import Login from "./component/Login";
import Signup from "./component/Signup";
import Dashboard from './component/Dashboard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
