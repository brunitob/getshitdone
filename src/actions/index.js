import * as types from '../constants/ActionTypes'

export const addTodo = props => ({ type: types.ADD_TODO, props })
export const fetchTodos = props => ({ type: types.FETCH_TODOS })
export const completeTodo = id => ({ type: types.COMPLETE_TODO, id })
export const clearCompleted = () => ({ type: types.CLEAR_COMPLETED })