import { AppShell } from '@mantine/core';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Kennisbank } from './pages/Kennisbank';
import { Quiz } from './pages/Quiz';
import { Contact } from './pages/Contact';
import { OverOns } from './pages/OverOns';
import { Nieuws } from './pages/Nieuws';
import { Downloads } from './pages/Downloads';

export default function App() {
  return (
    <AppShell header={{ height: 60 }} footer={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Header />
      </AppShell.Header>

      <AppShell.Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kennisbank" element={<Kennisbank />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/over-ons" element={<OverOns />} />
          <Route path="/nieuws" element={<Nieuws />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="*" element={<p>Pagina niet gevonden.</p>} />
        </Routes>
      </AppShell.Main>

      <AppShell.Footer>
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
}