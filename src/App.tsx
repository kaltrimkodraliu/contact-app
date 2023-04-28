import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ContactAdd from './pages/contact/ContactAdd';
import Edit from './pages/edit/Edit';
import Home from './pages/Home';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes >
      <Route path="/" element={<Home />} />
      <Route path="/edit" element={<Edit />} />
      <Route path="/contact-add" element={<ContactAdd />} />

      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
