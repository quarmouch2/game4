import { BrowserRouter, Routes, Route } from 'react-router';
import HomePage from './components/HomePage';
import OfferPage from './components/OfferPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/offer" element={<OfferPage />} />
      </Routes>
    </BrowserRouter>
  );
}