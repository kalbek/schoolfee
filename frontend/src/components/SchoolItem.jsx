import { useDispatch} from 'react-redux'
import { deleteSchool} from '../features/schools/schoolSlice'
import {FaEdit, FaTrash, FaCalendar} from 'react-icons/fa'
function SchoolItem({school}) {
    const dispatch = useDispatch()
  return (
    <div className="school">
        <div className='created_at'>
          <FaCalendar/>{new Date(school.createdAt).toLocaleDateString('en-US')}
        </div>
        <div className="school-detail">
          <div className="text-det">

        <h2> Name: {school.name}</h2>
        <h2> Address: {school.address}</h2>
        <h2> Level: {school.level}</h2>
          </div>
        </div>
        <button className="close" onClick={() => dispatch(deleteSchool(school._id))}><FaTrash/>delete</button>
        <button className="edit"><FaEdit/>edit</button>
</div>
  )
}
 
export default SchoolItem