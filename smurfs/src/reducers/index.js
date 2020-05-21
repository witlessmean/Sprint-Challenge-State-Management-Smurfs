import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import postSmurfsReducer from './postSmurfsReducer'

export default combineReducers({
    form: formReducer, smurfs: postSmurfsReducer
  
})