import { useDispatch} from 'react-redux'
import { deleteSchool} from '../features/schools/secondSchoolSlice'
function SecondSchoolItem({school}) {
    const dispatch = useDispatch()
  return (
    <div className="school">
        <div>
            {new Date(school.createdAt).toLocaleDateString('en-US')}
        </div>
        <h2>text: {school.text}</h2>
        <h2>name: {school.name}</h2>
        <h2>address: {school.address}</h2>
        <button onClick={() => dispatch(deleteSchool(school._id))} className="close">X</button>
    </div>
  )
}
 
export default SecondSchoolItem