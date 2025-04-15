import './App.css'
import './styles/common.css'
import Increment from './components/Increment'
import Decrement from './components/Decrement'
import { useSelector, useDispatch } from 'react-redux'
import { reset } from './store/actions/counter'

function App() {
  const count = useSelector((store) => store.count)
  const dispatch = useDispatch()

  return (
    <div className='container'>
      <h1>App</h1>
      <p className='counter'>{count}</p>
      <button
        id='reset-btn'
        onClick={() => dispatch(reset())}
      >Reset</button>
      <div className='flex'>
        <Increment />
        <Decrement />
      </div>
    </div>
  )
}

export default App


/*
  # Redux: Central store for React application (Full fledged independent state management)
    - Need for redux
      - To avoid props drilling/lifting the state up issues while working with complex react applications where the same state is required by different components

    - Terminologies:
      - Reducer function: A function which has the current state and logic to update state based on different action types
        - Syntax:
          const reducer = (state, action) => {
            switch(action.type) {
              case: 'ACTION_1': 
                return {
                  ...state,
                  a: state.a + 1
                }
              case: 'ACTION_2': 
                return {
                  ...state,
                  b: state.b + 1
                }
              default:
                return state
            }
          }
          - Two parameters:
            - state object
            - action object
          - For each action type, return the updated state
            - Define a default state, which returns the current state
      - Action: An object with 'type' property, which is intended to perform a state update in the reducer function
        - Syntax:
          {
            type: 'ACTION_1'
          }
          - Two parameters:
            - type (mandatory): unique identifier 
            - payload: Additional data to be used while updating the state
      - Additional:
        - Subscribe: Components can 'subscribe' to the store to get notified about state updates, post which, it can re-render with the updated state value
        - Dispatch: Components can 'dispatch' action objects to perform certain state updates

    - React-Redux:
      - 'Provider' component: This component wraps the complete react app and provides store access to all the components
        Syntax: <Provider store={store}><App /></Provider>
      - 'useSelector' hook: Used within the components to access the redux store
        Syntax: const count = useSelector((store) => store.count)
      - 'useDispatch' hook: Used within the components to get access to 'dispatch' method, which can further be used to dispatch action objects

    - References:
      - Redux: https://redux.js.org/
      - React-Redux: https://react-redux.js.org/introduction/getting-started
*/