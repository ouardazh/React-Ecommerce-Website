import "./App.css";
import Header from "./layouts/Header";
import { Hero, Products } from "./pages/Home/Home";
import About from './pages/About/About'
import Footer from "./layouts/Footer";
import { Route, Routes } from "react-router-dom";
import Error from './pages/Error/Error'
import Product from './pages/Product/ProductCart'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Products />
            </>
          }
        />
        
        <Route path="/productlist" element={<Product />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />
      } />
      </Routes>
     
      
      
      <Footer />
    </>
  );
}

export default App;

