import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './component/home/home'
import { Provider } from 'react-redux';
import store from './component/reducer/store';
function App() {
  return (
    <Provider store={store}>
      <div className="container-fluid  p-0 m-0">
        <div className="App  ">
          <Home />
        </div>
      </div>
    </Provider>
  );
}

export default App;
