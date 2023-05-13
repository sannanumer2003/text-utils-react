import React, {useState} from 'react';
import './App.css';
import Navbar from './Navbar'
import Form from './Form'
import About from './About'
import Alert from './Alert'
import {
  BrowserRouter as Router,
  RouterProvider,
  Route,
  Routes,
  Link,
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');

    const [textMode, setTextMode] = useState('dark');

    const [displayTextMode, setDisplayTextMode] = useState('Dark');

    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) =>{
      setAlert (
        {
          msg: message,
          type: type
        }
      );

      setTimeout(() => {
        setAlert(null);
      }, 2000);
    }

    const handleMode = ()=> {
        if(mode === 'light'){
            setMode(
                'dark'
            );
            setTextMode(
                'light'
            );
            setDisplayTextMode(
                'Light'
            );
            document.body.style.backgroundColor = "#454646";
            showAlert("Dark mode has been enabled", "success");
        }else{
            setMode('light');
            setTextMode(
                'dark'
            );
            setDisplayTextMode(
                'Dark'
            );

            document.body.style.backgroundColor = "white";
            showAlert("Light mode has been enabled", "success");
        }
    }

    

  return (
    <>

    <Router>
      <Navbar title="TextUtil" mode={mode} textMode={textMode} displayTextMode={displayTextMode} handleMode={handleMode}/>
      <Alert alert={alert}/>
      <Routes>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/" element={<Form heading="Try TextUtil - Word Counter, Character Counter, Remove extra spaces" mode={mode} showAlert={showAlert}/>
}/>
      </Routes>
      {/* <About /> */}
    </Router>

      
    </>
  );
}

export default App;
