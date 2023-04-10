import './App.css';
import './components/ShopItemFunc/ShopItemFunc.css';
import { ShopItemFunc } from "./components/ShopItemFunc/ShopItemFunc.jsx";

const item = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  price: 399,
  currency: '£'
}

function App() {
  return (
    
    <div className="App">
      <div className="container">
        <div className="background-element"></div>
        <div className="highlight-window">
          <div className='highlight-overlay'></div>
        </div>
        <div className="window">
          <ShopItemFunc goodObj = {item} />
        </div>
      </div>
    </div>
  );
}
export default App;
