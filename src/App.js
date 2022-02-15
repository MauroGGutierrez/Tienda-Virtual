import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./ui/Header";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/carrito" element={<CartPage />}/>
      </Routes>
    </Router>
  )
}

export default App;
