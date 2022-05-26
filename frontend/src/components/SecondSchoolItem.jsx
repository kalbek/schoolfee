import { useDispatch} from 'react-redux'
import { deleteSchool} from '../features/schools/secondSchoolSlice'
// import { deleteSchool} from '../features/students/choolSlice'
function SecondSchoolItem({school}) {
    const dispatch = useDispatch()
  return (
    <div className="school">
        <div>
            {new Date(school.createdAt).toLocaleDateString('en-US')}
        </div>
        <h2>School Name: {school.name}</h2>
        <h2>School Address: {school.address}</h2>
        <h2>School Level: {school.level}</h2>
        <button onClick={() => dispatch(deleteSchool(school._id))} className="close">X</button>
    </div>
  )
}

export default SecondSchoolItem