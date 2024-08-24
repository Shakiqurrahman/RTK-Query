import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
      </Routes>
    </Router>
  );
};

export default App;
