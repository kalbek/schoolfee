import { useDispatch} from 'react-redux'
import { deleteStudent} from '../features/students/studentSlice'
import {FaEdit, FaTrash, FaCalendar} from 'react-icons/fa'
 
function StudentItem({student}) {
    const dispatch = useDispatch()
  return (
    <div className="student">
        <div className='created_at'>
        <FaCalendar/>{new Date(student.createdAt).toLocaleDateString('en-US') }
        </div>
        <div className="student-detail">
          <div className="text-det">
          <h2>First Name: {student.fname}</h2>
        <h2>Last Name: {student.lname}</h2>
        <h2>Grade: {student.grade}</h2>
        <h2>Section: {student.section}</h2>
          </div>
        </div>
 
        <button className="close" onClick={() => dispatch(deleteStudent(student._id))}><FaTrash/>delete</button>
        <button className="edit"><FaEdit/>edit</button>
    </div>
  )
}

export default StudentItem