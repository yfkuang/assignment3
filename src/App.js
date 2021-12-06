import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams
} from "react-router-dom"
import { Header } from './components/header'
import { Footer } from './components/footer'
import { Content } from './components/content';
import { Index } from './components/pages/landing'
import { Product } from './components/pages/product'
import { Products } from './products.js'

function App() {
  let { id } = useParams();

  return (
    <div className="App">
      
      <Router>
        <Header />
        <Content>
          <Routes>
            {/* Index */}
            <Route exact path="/" element={<Index products={ Products }/>} />
            {/* Product */}
            <Route path="/product/:id" element={<Product products={ Products }/>} />
          </Routes>
        </Content>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
