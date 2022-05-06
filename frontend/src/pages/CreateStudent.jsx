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
        name: '',   
        level: '',
        address:'',
    })

    const {name, level, address } = formData
    
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
            name,
            level,
            address,
           }
        dispatch(createStudent(userData))
        setFormData('')
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
                    <input className="form-control" id="name" type='text' name='name' value={name} placeholder='Enter student  name' onChange={onChange} />
                </div>
                <div className="form-group">
                    <input className="form-control" id="address" type='text' name='address' value={address} placeholder='Enter student address' onChange={onChange} />
                </div>
                <div className="form-group">
                    <input className="form-control" id="level" type='text' name='level' value={level} placeholder='Enter student level' onChange={onChange} />
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