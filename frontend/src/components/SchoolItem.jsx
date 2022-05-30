import { useDispatch} from 'react-redux'
import { deleteSchool} from '../features/schools/schoolSlice'
function SchoolItem({school}) {
    const dispatch = useDispatch()
  return (
    <div className="school">
        <option value="⬇️ Select a fruit ⬇️"> -- Select a fruit -- </option>
      {/* {fruits.map((fruit) => <option value={fruit.value}>{fruit.label}</option>)} */}
    </div>
  )
}
 
export default SchoolItem