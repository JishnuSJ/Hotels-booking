import logo from './logo.svg';
import './App.css';
import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home/Home';
import List from './pages/lists/List';
import Hotel from './pages/hotel/Hotel';
  
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/hotels" element={<List/>}/>
      <Route path="/:id" element={<Hotel/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
