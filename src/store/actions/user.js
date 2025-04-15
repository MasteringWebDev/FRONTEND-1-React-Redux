export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_BATCH = 'UPDATE_BATCH'
export const UPDATE_STACK = 'UPDATE_STACK'
export const UPDATE_MARKS = 'UPDATE_MARKS'

export const updateName = (name) => ({
  type: UPDATE_NAME,
  payload: name
})

export const updateBatch = (batch) => ({
  type: UPDATE_BATCH,
  payload: batch
})

export const updateStack = (stack) => ({
  type: UPDATE_STACK,
  payload: stack
})

export const updateMarks = (marks) => ({
  type: UPDATE_MARKS,
  payload: marks
})