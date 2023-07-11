import './App.css';
import Nav from './components/Nav';
import Products from './pages/Products.jsx';
import Cart from './pages/Cart';
import { Route, Routes } from 'react-router-dom';
import Singel from './pages/Singel';
import Login from './pages/Login';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
       <Nav />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='products' element={<Products />}/>
          <Route path='products/:id' element={<Singel />} />
          <Route path='cart' element={<Cart />}/>
        </Routes>
        <Footer />        
    </div>
  );
}

export default App;
