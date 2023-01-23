import {useReducer} from 'react';
import Context from '../components/ContextFile';
import reducerFunction from '../components/reducerFunction'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {

  const [mainState,dispatch]=useReducer(reducerFunction, {})
  console.log("/////// mainState from .app.js ////////\n",mainState)


  return  <Context.Provider value={{mainState,dispatch}}  >
            <Component {...pageProps} />
          </Context.Provider>
}
