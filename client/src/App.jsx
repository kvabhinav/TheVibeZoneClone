import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/account/login" element={<Login />}></Route>
            <Route path="/account/Register" element={<Register />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthContextProvider>
    </div>

  );
}

export default App;
