import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import postReducer from "./Reducers/postReducer"

const combinedReducers = combineReducers({
    post: postReducer,
});

const store = createStore(
    combinedReducers,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
