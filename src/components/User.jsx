import '../styles/common.css'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { 
  updateName,
  updateBatch,
  updateStack,
  updateMarks
} from '../store/actions/user'

const User = () => {
  const user = useSelector((store) => store.user)
  const [newName, setNewName] = useState(user.name)
  const [newBatch, setNewBatch] = useState(user.batch)
  const [newStack, setNewStack] = useState(user.techStack)
  const [newMarks, setNewMarks] = useState(user.latestMarks)
  const dispatch = useDispatch()

  return (
    <div 
      className='container'
      style={{ 
        textAlign: 'left',
        margin: '2em 0 1em'
      }}
    >
      <h1>{user.name}</h1>
      <ul>
        <li>Batch: {user.batch}</li>
        <li>Tech Stack: {user.techStack}</li>
        <li>Latest Marks: {user.latestMarks}/100</li>
      </ul>
      <input
        type='text'
        value={newName}
        onInput={(e) => setNewName(e.target.value)}
      />
      <button
        onClick={() => dispatch(updateName(newName))}
      >Update Name</button>
      <br />

      <input
        type='text'
        value={newBatch}
        onInput={(e) => setNewBatch(e.target.value)}
      />
      <button
        onClick={() => dispatch(updateBatch(newBatch))}
      >Update Batch</button>
      <br />

      <input
        type='text'
        value={newStack}
        onInput={(e) => setNewStack(e.target.value)}
      />
      <button
        onClick={() => dispatch(updateStack(newStack))}
      >Update Tech Stack</button>
      <br />

      <input
        type='text'
        value={newMarks}
        onInput={(e) => setNewMarks(e.target.value)}
      />
      <button
        onClick={() => dispatch(updateMarks(newMarks))}
      >Update Marks</button>
    </div>
  )
}

export default User