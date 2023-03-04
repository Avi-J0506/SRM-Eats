import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import { Navbar } from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer/Footer';
import AllRoutes from './AllRoutes.jsx'
function App() {
  const [isLogin, setisLogin] = useState(true);
  return (
    <div className="App">
      <Router>
        <Navbar state={isLogin}/>
          <AllRoutes state={isLogin}/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
