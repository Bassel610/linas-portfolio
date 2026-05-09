import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MyWork from './pages/MyWork';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import { MainProvider } from './context';
import Navbar from './components/nav/Navbar';
import Footer from './components/footer/Footer';
import ScrollTopButton from './components/ScrollTopButton';

const APP_SX = { bgcolor: 'white', minHeight: '100vh' };

export default function App() {
  return (
    <MainProvider>
      <Router>
        <Box sx={APP_SX}>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<MyWork />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/contact" element={<ContactMe />} />
          </Routes>
          <Footer />
          <ScrollTopButton />
        </Box>
      </Router>
    </MainProvider>
  );
}
