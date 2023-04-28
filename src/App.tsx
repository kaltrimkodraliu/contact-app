import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Edit from './pages/edit/Edit';
import Home from './pages/Home';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes >
      <Route path="/" element={<Home />} />
      <Route path="/edit" element={<Edit />} />

      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
