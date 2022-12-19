import './App.css';
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Stock from './pages/Stocks';
import Dashboard from './pages/Dashboard';
import stocks from "../src/data";
import Nav from './components/Navbar';


export default function App() {
  const data = stocks;

  const [stock, setStock] = useState(null)

  const getStock = (element) => {
    setStock(element)
  }

  return (
    <main className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stocks/:symbol" element={<Stock stock={stock} />} />
        <Route path="/stocks" element={<Dashboard stocks={data} getStock={getStock} />} />
      </Routes>
    </main>
  );
}
