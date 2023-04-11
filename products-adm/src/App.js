import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import ProductDetail from './views/ProductDetail'
import Update from './views/Update';
import Main from './views/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/:id' element={<ProductDetail />}></Route>
          <Route path='/:id/edit' element={<Update />}></Route>
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
