import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FaChild} from 'react-icons/fa'
import { reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import { getStudents, createStudent } from '../features/students/studentSlice'
import StudentItem from '../components/StudentItem'

import SecondSchoolItem from '../components/SecondSchoolItem'

function RegisterStudent() {
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        grade: '',
        section: '',
    })

    const { fname, grade, lname, section } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const { user } = useSelector((state) => state.auth)
    const { students, isLoading, isError, message} = useSelector((state) => state.students)

    useEffect(() => {
      if (isError){
        console.log()
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
        const studentData = {
            fname,
            lname,
            grade,
            section,
        }
        dispatch(createStudent(studentData))
        setFormData('')
    }
    if (isLoading){
        return <Spinner/>
    }
  return (
    <>
    <section className='heading'>
            <h1>
                <FaChild/> Register Student
            </h1>
            {/* <p>Please Login</p> */}
        </section>
        <section className='form'>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input className="form-control" id="fname" name='fname' type='text' value={fname} placeholder='Student first name' onChange={onChange} />
                </div>
                <div className="form-group">
                    <input className="form-control" id="lname" name='lname' type='text' value={lname} placeholder='Student last name' onChange={onChange} />
                </div>
                <div className="form-group">
                    <input className="form-control" id="grade" name='grade' type='text' value={grade} placeholder='Student grade' onChange={onChange} />
                </div>
                <div className="form-group">
                    <input className="form-control" id="section" name='section' type='text' value={section} placeholder='Enter student section' onChange={onChange} />
                </div>
                <button className="btn btn-block form-group">Register Student</button>
            </form>
        </section>
        <section className="content">
        {students.length > 0 ? (
          <div className="students">
            {students.map((student) => (
                <StudentItem key={student._id} student={student}/>
            ))}
          </div>
        ) : (<h3>No student found</h3>)}
      </section> 
    </>
  )
}

export default RegisterStudent