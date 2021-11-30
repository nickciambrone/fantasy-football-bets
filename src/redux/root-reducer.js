import { combineReducers } from 'redux';
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import lineupReducer from './lineup/lineup.reducer';
import actionReducer from './action/action.reducer';

const persistConfig={
    key:'root',
    storage,
    whitelist:['lineup', 'action']
}

const rootReducer = combineReducers({
    lineup:lineupReducer,
    action:actionReducer
  
})

export default persistReducer(persistConfig, rootReducer)