
import { useContext, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Toaster } from 'react-hot-toast';

import { onAuthStateChangedListener } from './utils/firebase.utils';
import router from './routes/routes';
import { UserContext } from './contexts/user.context';
import { ThemeContext } from './contexts/theme.context';


import './App.css';

const queryClient = new QueryClient();

function App() {
  const { setUser, setLoading } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      setLoading(false);
      setUser(user);
      // console.log(user);
    })

    return unsubscribe;
  }, [setUser, setLoading])

  return (
    <div data-theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
      <Toaster />
    </div>
  );
}

export default App;