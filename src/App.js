import './App.css';
import {Routes,Route} from 'react-router-dom';

import Error  from './Error'
import Home from './HomePage/Home'

function App() {
  return (
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="*" element={<Error/>} />
  </Routes>
  );
}

export default App;
