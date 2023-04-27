import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import { Navbar } from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer/Footer';
import AllRoutes from './AllRoutes.jsx'
function App() {
  const [isLogin, setisLogin] = useState(false);
  const [selectedValue, setSelectedValue] = useState();
  const handleChange = e => {
    setSelectedValue(e.value);
  }

  return (
    <div className="App">
      <Router>
        <Navbar state={isLogin} selectedValue={selectedValue}/>
          <AllRoutes state={isLogin} setstate={setisLogin} selectedValue={selectedValue} handleChange={handleChange}/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
