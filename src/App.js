import './App.css';
import { Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next'; // Import the I18nextProvider
import i18n from './i18n'; // Import your i18n configuration
import Error from './Error';
import Home from './HomePage/Home';

import RiddleOne from './R1/RiddleOne';

function App() {
  return (
    <I18nextProvider i18n={i18n}> {/* Wrap your Routes with I18nextProvider */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path='/r1' element={<RiddleOne/>} />
      </Routes>
    </I18nextProvider>
  );
}

export default App;
