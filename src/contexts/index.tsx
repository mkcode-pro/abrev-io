import { ReactNode } from 'react';
import { AuthProvider } from './AuthContext';
import { UserProvider } from './UserContext';  
import { NotificationProvider } from './NotificationContext';

// Re-export individual contexts
export { useAuth } from './AuthContext';
export { useUser } from './UserContext';  
export { useNotifications } from './NotificationContext';

// Provider combinado para facilitar setup da aplicação
export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <UserProvider>
        <NotificationProvider>
          {children}
        </NotificationProvider>
      </UserProvider>
    </AuthProvider>
  );
}