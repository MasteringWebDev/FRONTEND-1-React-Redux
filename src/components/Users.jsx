import '../styles/common.css'
import { useSelector } from 'react-redux'

const Users = () => {
  const user = useSelector((store) => store.user)

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Batch</th>
            <th>Tech stack</th>
            <th>Latest marks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.name}</td>
            <td>{user.batch}</td>
            <td>{user.techStack}</td>
            <td>{user.latestMarks}/100</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Users