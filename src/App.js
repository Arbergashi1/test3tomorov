import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Details from './components/Details';
import Details2 from './components/Details2';


function App() {
  return (
    <>
    
    <Router>
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/details/:id" element={<Details/>}/>
       <Route path="/details2" element={<Details2/>}/>
       </Routes>
    </Router>
    </>
  )
}

export default App;
