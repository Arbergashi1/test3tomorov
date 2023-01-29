import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./components/Details";
import Details2 from "./components/Details2";
import EditDetailsId from "./components/singleNote/EditDetailsId";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/details2" element={<Details2 />} />
          <Route path="/editDetailsId" element={<EditDetailsId />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
