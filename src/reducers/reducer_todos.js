import { ADD_TODO, COMPLETE_TODO, CLEAR_COMPLETED  } from '../constants/ActionTypes'

const initialState = [] 

export default function (state = initialState, action) {
  console.log('yyyy')
  const time = Date.now();
  switch (action.type) {
    
    case ADD_TODO:
      return [
        {
          complete: false,
          title: action.props.title,
          date: time,
          avatar: action.props.title.substring(0, 1),
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1
        },
        ...state
      ]
    case COMPLETE_TODO:
    console.log('COMPLETE_TODO');
      return state.map(todo =>
        todo.id === action.id ?
          { ...todo, complete: !todo.complete } :
          todo
      )
    case CLEAR_COMPLETED:
      console.log('CLEAR_COMPLETED');
      return state.filter(todo => todo.complete === false)


    default:
      return state;
  }
}
