import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';

const logger = createLogger({});

export default createStore(combineReducers({}), {}, applyMiddleware(logger, thunk));
