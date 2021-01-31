import clientsReducer from './clients/clientsReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
	clients: clientsReducer,
})

export default rootReducer