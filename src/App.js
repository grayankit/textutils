import {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import Textarea from './components/Textarea';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert,setAlert] = useState(null); // To set alert
  //Function to show alert
  const showAlert =(message,Type)=>{
    setAlert({
      msg:message,
      type:Type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  //Function to toggle between light and dark mode
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled!","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Dark mode has been disabled","success")
    }
  }
  return (
    <>
    <Router>
      <Navbar title="Textutils" toggleMode={toggleMode} mode={mode}/>
      <Alert alert={alert}/>
      <div className="container my-5">
        <Routes>
          {/* // work of exact is to route to exact path of directory */}
      {/* /users --> Component 1
      /users/home --> Component 2 */}
          <Route exact path="/about" element={<About mode={mode}/>}/>
          <Route exact path="/" element={<Textarea showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>}/>
            {/* <Textarea showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/> */}
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;