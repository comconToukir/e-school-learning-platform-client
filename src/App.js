
import { useContext, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { onAuthStateChangedListener } from './utils/firebase.utils';
import { UserContext } from './contexts/user.context';
import router from './routes/routes';


import './App.css';

function App() {
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      setUser(user);
      console.log(user);
    })

    return unsubscribe;
  }, [setUser])
  
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;