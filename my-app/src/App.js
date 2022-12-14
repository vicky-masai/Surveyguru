import './App.css';
import Footer from './component/Footer';
import Hero from './component/Hero';
// import Loading from './component/Loading';
import Navbar from './component/Navbar';
import Pricing from './component/Pricing';
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
