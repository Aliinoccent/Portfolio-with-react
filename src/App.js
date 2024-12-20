import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './component/home/home'

function App() {
  return (
    <div className="App " style={{padding:0,margin:0,boxSizing:'border-box'}}>
      <Home />
    </div>
  );
}

export default App;
