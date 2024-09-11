import { AuthProvider } from './context/AuthContext';
import Router from './shared/Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function QueryProvider({ children }) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

function App() {
  return (
    <AuthProvider>
      <QueryProvider>
        <Router />
      </QueryProvider>
    </AuthProvider>
  );
}

export default App;
