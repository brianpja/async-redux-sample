import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import { selectSubreddit, fetchPostsIfNeeded } from './actions';
import rootReducer from './reducers';
import './index.css';
import App from './App';
import RedditList from './reddit-list';
import Search from './search';
// import registerServiceWorker from './registerServiceWorker';

const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

store.dispatch(selectSubreddit('cats'))
store
    .dispatch(fetchPostsIfNeeded('cats'))
    .then(() => console.log(store.getState()));

ReactDOM.render(

        <Provider store={store}>
            <div>
                <Search />
                <RedditList />
                <App />
            </div>
        </Provider>
,
    document.getElementById('root'));
// registerServiceWorker();
