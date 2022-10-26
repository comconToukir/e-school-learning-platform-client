
import { useContext, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Toaster } from 'react-hot-toast';

import { onAuthStateChangedListener } from './utils/firebase.utils';
import { UserContext } from './contexts/user.context';
import router from './routes/routes';


import './App.css';

const queryClient = new QueryClient();

function App() {
  const { setUser, setLoading } = useContext(UserContext);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      setLoading(false);
      setUser(user);
      // console.log(user);
    })

    return unsubscribe;
  }, [setUser, setLoading])

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
      <Toaster />
    </>
  );
}

export default App;