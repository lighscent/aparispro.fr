import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Stack from './pages/Stack';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import MentionsLegales from './pages/MentionsLegales';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <ChakraProvider value={defaultSystem}>
        <ThemeProvider>
          <LanguageProvider>
            <BrowserRouter>
              <Header />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/stack" element={<Stack />} />
                  <Route path="/projects" element={<ProjectsPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/mentions-legales" element={<MentionsLegales />} />
                </Routes>
              </main>
              <Footer />
              <WhatsAppButton />
            </BrowserRouter>
          </LanguageProvider>
        </ThemeProvider>
    </ChakraProvider>
  );
}
