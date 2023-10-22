import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/account/login" element={<Login />}></Route>
          <Route path="/account/Register" element={<Register />}></Route>
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
