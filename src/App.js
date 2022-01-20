import './App.css';
import Navbar from './components/Navbar.js';
import Textarea from './components/Textarea';

function App() {
  return (
    <>
    <Navbar title="Textutils"/>
    <div className="container my-20">
    <Textarea heading="Enter your text below to analyze"/>
    </div>
    </>
  );
}

export default App;