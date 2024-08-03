
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import './App.css';
import Home from './component/Home';
import About from './component/About';
import Blogs from './component/Blogs';
import Navbar from "./component/Navbar";
import NotFound from "./component/NotFound";
function App() {
  return (
    <BrowserRouter >
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
