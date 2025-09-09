import React, { useState } from 'react';
import { AuthProvider } from './components/Auth/AuthProvider';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { HomePage } from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import { ChatInterface } from './components/Chat/ChatInterface';
import ProfilePage from './pages/ProfilePage';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showChat, setShowChat] = useState(false);

  // all pages handled in ONE state
  const [activePage, setActivePage] = useState<
    'home' | 'contact' | 'profile' | 'cart' | 'login'
  >('home');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <AuthProvider>
      {/* flex column so footer stays at bottom */}
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header
          onSearch={handleSearch}
          clearSearch={clearSearch}
          setActivePage={setActivePage}
        />

        {/* main should grow to fill space */}
        <main className="flex-1 p-4">
          {activePage === 'home' && <HomePage searchQuery={searchQuery} />}
          {activePage === 'contact' && <ContactPage />}
          {activePage === 'profile' && <ProfilePage />}
         
        </main>

        

        {/* footer at the bottom */}
        <Footer setActivePage={setActivePage} />
        {/* Chat Interface overlay or fixed position */}
        <ChatInterface isOpen={showChat} onToggle={() => setShowChat(!showChat)} />
      </div>
    </AuthProvider>
  );
}

export default App;
