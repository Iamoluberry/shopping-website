import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home.jsx';
import Shop from './shop.jsx';
import PageNotFound from './PageNotFound/PageNotFound.jsx';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/shopping-website/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/shopping-website/shop" element={<Shop />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
