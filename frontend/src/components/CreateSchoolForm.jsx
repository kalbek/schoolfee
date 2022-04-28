import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {createSchool} from '../features/schools/schoolSlice'
// import {createSchool} from '../featues/schools/schoolSlice'
// import CreateSchool from '../pages/CreateSchool'


function CreateSchoolForm() {
    // const [text, setFormData]    = useState('')
    const [text, setFormData] = useState({
        schoolname: '',
        schooladdress:'',
        schoollevel:'',
    })
    const {schoolname, schooladdress, schoollevel } = text
    const dispatch = useDispatch()  

        const onChange = (e) => {
            setFormData((previousState) => ({
            ...previousState,
            [e.target.name] : e.target.value,
        }))
    }
    const onSubmit = (e) =>{
        e.preventDefault()
        dispatch(createSchool({text}))
        // setFormData('')
    }
  return (
    <>
<section>
        <form onSubmit={onSubmit}>
         
            <div className="form-group">
                    <input  id="schoolname" name='schoolname' type='text' value={schoolname} placeholder='Enter your school name' onChange={onChange} />
            </div>
            <div className="form-group">
                    <input   id="schooladdress" name='schooladdress' type='text' value={schooladdress} placeholder='Enter your school address' onChange={onChange} />
            </div>
            <div className="form-group">
                <select name="schoollevel" id="schoollevel" type="schoollevel" onChange={onChange} value={schoollevel}>
                    <option value="">School Level</option>
                    <option value="Kindergarten">Kindergarten</option>
                    <option value="Kindergarten-Primary">Kindergarten-Primary</option>
                    <option value="Kindergarten-Primary-Secondary">Kindergarten-Primary-Secondary</option>
                    <option value="Primary-Secondary-HighSchool">Primary-Secondary-HighSchool</option>
                    <option value="HighSchool">HighSchool</option>
                    <option value="College">College</option>
                </select>
                </div>
            <div className="form-group">
                <button className="btn btn-block" type='submit'>
                    Create School 
                </button>
            </div>
        </form>
    </section>

    </>
  )
}

export default CreateSchoolForm

