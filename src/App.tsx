import React, { useState } from 'react';
import { AuthProvider } from './components/Auth/AuthProvider';
import { Header } from './components/Layout/Header';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { CartPage } from './pages/CartPage';
import { ChatInterface } from './components/Chat/ChatInterface';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showLogin, setShowLogin] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showChat, setShowChat] = useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50">
        <Header
          onSearch={handleSearch}
          onLoginClick={() => setShowLogin(true)}
          onCartClick={() => setShowCart(true)}
        />
        
        <main>
          <HomePage
            searchQuery={searchQuery}
            onClearSearch={clearSearch}
          />
        </main>

        {/* Modals and Overlays */}
        <LoginPage
          isOpen={showLogin}
          onClose={() => setShowLogin(false)}
        />

        <CartPage
          isOpen={showCart}
          onClose={() => setShowCart(false)}
        />

        <ChatInterface
          isOpen={showChat}
          onToggle={() => setShowChat(!showChat)}
        />
      </div>
    </AuthProvider>
  );
}

export default App;