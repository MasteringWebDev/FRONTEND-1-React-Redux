import {
  UPDATE_NAME,
  UPDATE_BATCH,
  UPDATE_STACK,
  UPDATE_MARKS
} from '../actions/user'

const initialState = {
  name: 'Suraj Nishad',
  batch: 'Full Stack Development',
  techStack: 'MERN',
  latestMarks: 96
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_NAME:
      return {
        ...state,
        name: action.payload
      }
    case UPDATE_BATCH:
      return {
        ...state,
        batch: action.payload
      }
    case UPDATE_STACK: 
      return {
        ...state,
        techStack: action.payload
      }
    case UPDATE_MARKS: 
      return {
        ...state,
        latestMarks: action.payload
      }
    default:
      return state
  } 
}

export default reducer