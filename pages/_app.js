import NextNprogress from 'nextjs-progressbar'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { tasksTextMiddleware } from '../redux/middlewares/todoMiddlewares'
import { rootReducer } from '../redux/reducers/rootReducer'
import { store } from '../redux/toolkit'


import '../styles/globals.scss'

export default function MyApp({ Component, pageProps }) {

    // const store = createStore(
    //     rootReducer,
    //     composeWithDevTools(
    //         applyMiddleware(
    //             thunk,
    //             tasksTextMiddleware
    //         )
    //         // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    //     )
    // )
    return (
        <Provider store={store}>
            <NextNprogress
                color="#29D"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
                showOnShallow={true}
                />
            <Component {...pageProps} />
        </Provider>
    ) 
  }
  