import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'

function App() {
  return (
    <div className="App">
      <div className="initial-logo">
      <img src="../logo.png" alt="company-logo" />
      </div>
      <p className="subject">A Online Store Task</p>

      <Routes>
          <Route path='/' element={<Home />} />
        </Routes>

    </div>
  );
}

export default App;
