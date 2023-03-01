import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
import { Navbar } from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer/Footer';
import AllRoutes from './AllRoutes.jsx'
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <AllRoutes/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
