
import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.js";
import QuantityPicker from './components/quantityPicker';
import Catalog from './pages/catalog';
import Home from './pages/home';
import About from './pages/about';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Home />
      <Catalog />
      <About />

      <Footer />
    </div>
  );
}

export default App;
