import { createStore } from 'redux'

const initialState = {
  count: 0
}

// Action type constants
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

// Action creators: functions which return action objects
const increment = () => ({
  type: INCREMENT
})
const decrement = () => ({
  type: DECREMENT
})

const countReducer = (state = initialState, action) => {
  switch(action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      }
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state
  }
}

const store = createStore(countReducer)

/* Below methods are only used to mimic subscribe and dispatch scenarios, in real projects, this will be used with react applications */
// Subscribe
store.subscribe(()=> {})
// Access current state value
console.log(store.getState())
// State updates
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(decrement())
console.log(store.getState())

/*
  # Redux
    - npm: 'redux'
    - createStore: Used to create redux store from reducer function(s)
      - Syntax: const store = createStore(reducerFunction)

    - store.subscribe(): Subscribe to the store
    - store.dispatch(): Dispatch the actions
    - store.getState(): Fetch current state value
*/