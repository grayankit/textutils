import {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import Textarea from './components/Textarea';
import Alert from './components/Alert';
// import About from './components/About';

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
    <Navbar title="Textutils" toggleMode={toggleMode} mode={mode}/>
    <Alert alert={alert}/>
    <div className="container">
    <Textarea heading="Enter your text below to analyze" toggleMode={toggleMode} mode={mode} showAlert={showAlert}/>
    </div>
    </>
  );
}

export default App;