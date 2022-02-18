import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./ui/Header";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/carrito" element={<CartPage />}/>
        <Route path="/login" element={<LoginPage />}/>
      </Routes>
    </Router>
  )
}

export default App;
