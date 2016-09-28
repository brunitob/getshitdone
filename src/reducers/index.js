import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';
import reducerTodos from './reducer_todos'

const rootReducer = combineReducers({
  todos: reducerTodos,
  form: formReducer
});

export default rootReducer;
