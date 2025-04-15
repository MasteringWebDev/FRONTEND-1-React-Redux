import '../styles/common.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement } from '../store/actions/counter'

const Decrement = () => {
  const count = useSelector((store) => store.count)
  const dispatch = useDispatch()

  return (
    <div className='container'>
      <h2>Decrement</h2>
      <p className='counter'>{count}</p>
      <button
        onClick={() => dispatch(decrement())}
      >-</button>
    </div>
  )
}

export default Decrement