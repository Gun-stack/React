import { combineReducers } from 'redux'
import { addsubReducer } from './addsub'
import { countingReducer } from './Counting'

export const rootReducer = combineReducers({
    
    value:addsubReducer,
    count:countingReducer
})