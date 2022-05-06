import { useDispatch} from 'react-redux'
import { deleteStudent} from '../features/students/studentSlice'
function StudentItem({student}) {
    const dispatch = useDispatch()
  return (
    <div className="student">
        <div>
            {new Date(student.createdAt).toLocaleDateString('en-US')}
        </div>
        <h2>Student Name: {student.name}</h2>
        <h2>Student Address: {student.address}</h2>
        <h2>Student Level: {student.level}</h2>
        <button onClick={() => dispatch(deleteStudent(student._id))} className="close">X</button>
    </div>
  )
}

export default StudentItem