import {Index} from './page/Index';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import SignIn from './page/SignIn';
import { Products } from './page/Products';
import { Header } from './components/common/Header';
import ProductDetail from './page/ProductDetail'
import {Footer} from './components/common/Footer'

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
