import './App.css';
import Navbar from './components/Navbar.js';
import Textarea from './components/Textarea';
// import About from './components/About';

function App() {
  return (
    <>
    <Navbar title="Textutils"/>
    <div className="container">
    <Textarea heading="Enter your text below to analyze"/>
    </div>
    </>
  );
}

export default App;