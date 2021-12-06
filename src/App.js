import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams
} from "react-router-dom"
import { Header } from './components/header'
import { Index } from './components/pages/landing'


function App() {
  let { id } = useParams();

  return (
    <div className="App">
      
      <Router>
        <Header />
        <Routes>
          {/* Index */}
          <Route exact path="/" element={<Index/>} />
          {/* Product */}
          <Route path="/product/:id" element={<Product products={ Products }/>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
