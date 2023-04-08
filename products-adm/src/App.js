import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import ProductDetail from './views/ProductDetail'

import Main from './views/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/:id' element={<ProductDetail />}></Route>
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
