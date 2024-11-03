import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 

function App() {
  const [mode, setmode] = useState('slate-400');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = (cls) => {
    if (mode === 'dark') {
      setmode('slate-400');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = 'MyTextUtils - Light Mode';
    } else {
      setmode('dark');
      document.body.style.backgroundColor = "#032642";
      showAlert("Dark mode has been enabled", "success");
      document.title = 'MyTextUtils - Dark Mode';
    } 
  };

  return (
    <Router>
      <Navbar title="MyTextUtils" navItems1="Home" navItems2="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
          <Route path="/" element={<TextForm heading="Enter the text to Analyze" mode={mode} showAlert={showAlert} />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
