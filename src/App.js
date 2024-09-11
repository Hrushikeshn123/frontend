import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import User from './pages/User';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      
      <Home/>
      <About/>
      <Contact/>
      <User/>
    </div>
  );
}

export default App;
