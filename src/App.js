
import { useContext, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { onAuthStateChangedListener } from './utils/firebase.utils';
import { UserContext } from './contexts/user.context';
import router from './routes/routes';


import './App.css';

function App() {
  const { setUser, setLoading } = useContext(UserContext);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      setLoading(false);
      setUser(user);
      console.log(user);
    })

    return unsubscribe;
  }, [setUser, setLoading])
  
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;