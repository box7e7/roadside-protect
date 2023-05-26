import {useReducer} from 'react';
import Context from '../components/ContextFile';
import reducerFunction from '../components/reducerFunction'
import { UserProvider } from '@auth0/nextjs-auth0/client';
import '../styles/globals.css'

export default function App({ Component, pageProps }) {

  const [mainState,dispatch]=useReducer(reducerFunction, {})
  console.log("/////// mainState from .app.js ////////\n",mainState)


  return  <Context.Provider value={{mainState,dispatch}}  >
            <UserProvider>
              <Component {...pageProps} />
            </UserProvider>
          </Context.Provider>
}
