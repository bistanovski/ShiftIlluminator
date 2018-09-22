import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ordersChartReducer from './reducers/OrdersChartReducer';

const logger = createLogger({});

export default createStore(combineReducers({ordersChartReducer}), {}, applyMiddleware(logger, thunk));