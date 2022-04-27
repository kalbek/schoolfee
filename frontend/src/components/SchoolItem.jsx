import { useDispatch} from 'react-redux'
import { deleteSchool} from '../features/schools/schoolSlice'
function SchoolItem({school}) {
    const dispatch = useDispatch()
  return (
    <div className="school">
        <div>
            {new Date(school.createdAt).toLocaleDateString('en-US')}
        </div>
        <h2>{school.text}</h2>
        <button onClick={() => dispatch(deleteSchool(school._id))} className="close">X</button>
    </div>
  )
}
 
export default SchoolItem