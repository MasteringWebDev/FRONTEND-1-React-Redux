import './App.css'

function App() {
  return (
    <>
      <h1>Redux</h1>
    </>
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

    - References:
      - https://redux.js.org/
*/