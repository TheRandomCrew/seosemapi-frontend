import React from 'react'
import {
  GlobalStateProvider,
  GlobalActionsProvider
} from './globalContext';

import tokenService from '../../router/token';

import { Grommet, grommet } from 'grommet';
import { dark } from '../style/darkTheme'
import { hp } from '../style/hp';

const initialState = {
  username: '',
  email: '',
  password: '',
  theme: 0
};

const themes = [grommet, dark, hp]

const GlobalStore = ({ children = undefined }) => {
  const [state, dispatch] = React.useReducer(Reducer, initialState);

  React.useLayoutEffect(() => {
    if (localStorage.hasOwnProperty('lscache-seosemapi')) {
      try {
        const { email, password } = tokenService.get().token;
        dispatch({ type: 'SET_IDENTITY', email });
        dispatch({ type: 'SET_PASSWORD', password });
      } catch (e) {
        console.error(e)
      }
    }
  }, [])

  return (
    <GlobalStateProvider
      value={state}
    >
      <GlobalActionsProvider
        value={dispatch}
      >
        <Grommet theme={themes[state.theme]} full className='ThemeProvider'>
          {children}
        </Grommet>
      </GlobalActionsProvider>
    </GlobalStateProvider>
  )
}

const Reducer = (state, action) => {
  try {
    switch (action.type) {
      case 'SET_USERNAME': {
        return {
          ...state,
          username: action.username
        }
      }
      case 'SET_EMAIL': {
        return {
          ...state,
          email: action.email
        }
      }
      case 'SET_IDENTITY': {
        return {
          ...state,
          username: action.email,
          email: action.email
        }
      }
      case 'SET_PASSWORD': {
        return {
          ...state,
          password: action.password
        }
      }
      case 'SET_THEME': {
        return {
          ...state,
          theme: action.theme
        }
      }
      default: {
        throw new Error(`Unhandled action type: ${action.type}`)
      }
    }
  } catch (error) {
    console.error(error);
  }
}

export default GlobalStore;