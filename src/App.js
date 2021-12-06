import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import { Header } from './components/header'
import { Index } from './components/pages/landing'
import { Fighters } from './components/fighters'

function App() {

  return (
    <div className="App">
      
      <Router>
        <Header />
        <Routes>
          {/* Index */}
          <Route exact path="/" element={<Index/>} />
          {/* Fighter */}
          <Route path="/fighter/:id" element={<Fighters />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
