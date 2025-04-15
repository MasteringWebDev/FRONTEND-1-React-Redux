import '../styles/common.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../store/actions/counter'

const Increment = () => {
  const count = useSelector((store) => store.counter.count)
  const dispatch = useDispatch()

  return (
    <div className='container'>
      <h2>Increment</h2>
      <p className='counter'>{count}</p>
      <button
        onClick={() => dispatch(increment())}
      >+</button>
    </div>
  )
}

export default Increment