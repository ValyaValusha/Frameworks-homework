import {combineReducers} from 'redux';
import {items, itemsHasErrored, itemsIsLoading} from './reducer-getData'

export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading
});