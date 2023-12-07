import './App.css';
import Home from "./pages/Home";
import Work from "./pages/Work";
import Twitch from "./pages/Twitch";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/work" exact element={<Work />} />
          <Route path="/twitch" exact element={<Twitch />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
