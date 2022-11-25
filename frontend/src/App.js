import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';
import HomeScreen from './screen/homeScreen';
import ProductScreen from './screen/productScreen';
import './App.css';

function App() {

  return (
    <BrowserRouter>
    <div>
      <header>
        <Link to="/">Shopping</Link>
      </header>
        <main>
          <Routes>
            <Route path='/product/:slug' element={<ProductScreen/>}/>
            <Route path='/' element={< HomeScreen/>} />
            </Routes>

      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
