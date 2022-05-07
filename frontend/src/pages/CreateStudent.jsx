import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {FaUser} from 'react-icons/fa'
import { reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import {getStudents, createStudent} from '../features/students/studentSlice'
import StudentItem from '../components/StudentItem'


function CreateStudent() {
    const [formData, setFormData] = useState({
        fname: '',   
        lname: '',   
        sex: '',   
        grade: '',   
        section: '',
        hasScholarship:'',
    })

    const {fname, lname, sex, grade, section, hasScholarship } = formData
    
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)
    const {students, isLoading, isError, message} = useSelector((state) => state.students)
    useEffect(() => {
      if (isError){
        console.log(message)
      }
      if (!user) {
        navigate('/login')
      }
  
      dispatch(getStudents())
  
      return () => {
        dispatch(reset())
      }
    }, [user, navigate, isError, message, dispatch])
 

    const onChange = (e) => {
        setFormData((previousState) => ({
            ...previousState,
            [e.target.name] : e.target.value,
        }))
    }
    const onSubmit = (e) => {
        e.preventDefault()
           const userData = {
            fname,
            lname,
            sex,
            grade,
            section,
            hasScholarship,
           }
        dispatch(createStudent(userData))
        setFormData('')
    }
    const handleCheckbox = (e) => {
        e.target.value = true;

    }
    if (isLoading){
        return <Spinner/>
    }
    return (
    <>
        <section className='heading'>
            <h1>
                <FaUser/> Add Student
            </h1>
            {/* <p>Please Create an Account</p> */}
            {/* <StudentFrom/> */}
        </section>
        <section className='form'>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input className="form-control" id="fname" type='text' name='fname' value={fname} placeholder='Student First Name' onChange={onChange} />
                </div>
                <div className="form-group">
                    <input className="form-control" id="lname" type='text' name='lname' value={lname} placeholder='Student Last Name' onChange={onChange} />
                </div>
                <div className="form-group">
                    <select name="sex" id="sex" placeholder='sex'>
                        <option value="sex">M</option>
                        <option value="sex">F</option>
                    </select>
                </div>
                <div className="form-group">
                    <input className="form-control" id="grade" type='text' name='grade' value={grade} placeholder='Student  grade' onChange={onChange} />
                </div>
                <div className="form-group">
                    <input className="form-control" id="section" type='text' name='section' value={section} placeholder='Student section' onChange={onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="hasScholarship">Student has scholarship</label>
                    {/* <input className="form-control" id="hasScholarship" type='radio' name='hasScholarship' value={hasScholarship} placeholder='Student has scholarship.' onChange={onChange} /> */}
                    <input type="checkbox" id="hasScholarship" name="hasScholarship" value="false" onChange={this.handleCheckbox}></input>
                    <label for="hasScholarship">Has Scholarship</label>
                </div>
                <button className="btn btn-block form-group">Add Student</button>
            </form>
        </section>
        <section className="content">
        {students.length > 0 ? (
          <div className="students">
            {students.map((student) => (
                <StudentItem key={student._id} student={student}/>
            ))}
          </div>
        ) : (<h3>No students found</h3>)}
        </section> 
        </>
  )
}

export default CreateStudent