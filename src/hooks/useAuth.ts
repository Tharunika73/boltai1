import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Mock authentication service
class AuthService {
  private users: User[] = [];
  private currentUser: User | null = null;

  constructor() {
    this.loadFromStorage();
  }

  private loadFromStorage() {
    const stored = localStorage.getItem('auth_users');
    if (stored) {
      this.users = JSON.parse(stored);
    }
    
    const currentUserStored = localStorage.getItem('auth_current_user');
    if (currentUserStored) {
      this.currentUser = JSON.parse(currentUserStored);
    }
  }

  private saveToStorage() {
    localStorage.setItem('auth_users', JSON.stringify(this.users));
    if (this.currentUser) {
      localStorage.setItem('auth_current_user', JSON.stringify(this.currentUser));
    } else {
      localStorage.removeItem('auth_current_user');
    }
  }

  async login(email: string, password: string): Promise<User | null> {
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API call
    
    const user = this.users.find(u => u.email === email);
    if (user) {
      this.currentUser = user;
      this.saveToStorage();
      return user;
    }
    return null;
  }

  async register(email: string, password: string, name: string): Promise<User | null> {
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API call
    
    if (this.users.find(u => u.email === email)) {
      return null; // User already exists
    }

    const newUser: User = {
      id: Date.now().toString(),
      email,
      name,
      createdAt: new Date()
    };

    this.users.push(newUser);
    this.currentUser = newUser;
    this.saveToStorage();
    return newUser;
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('auth_current_user');
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }
}

const authService = new AuthService();

export const useAuthProvider = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setUser(authService.getCurrentUser());
    setLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setLoading(true);
    try {
      const user = await authService.login(email, password);
      if (user) {
        setUser(user);
        return true;
      }
      return false;
    } finally {
      setLoading(false);
    }
  };

  const register = async (email: string, password: string, name: string): Promise<boolean> => {
    setLoading(true);
    try {
      const user = await authService.register(email, password, name);
      if (user) {
        setUser(user);
        return true;
      }
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  return {
    user,
    login,
    register,
    logout,
    loading
  };
};

export { AuthContext };