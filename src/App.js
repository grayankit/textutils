import {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import Textarea from './components/Textarea';
// import About from './components/About';

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
    <Navbar title="Textutils" toggleMode={toggleMode} mode={mode}/>
    <div className="container">
    <Textarea heading="Enter your text below to analyze" toggleMode={toggleMode} mode={mode}/>
    </div>
    </>
  );
}

export default App;