import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {FaUser} from 'react-icons/fa'
import { reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import {getSchools, createSchool} from '../features/schools/secondSchoolSlice'
import SecondSchoolItem from '../components/SecondSchoolItem'


function CreateSchool() {
    const [formData, setFormData] = useState({
        name: '',
        level: '',
        address:'',
    })

    const {name, level, address } = formData
    
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)
    const {schools, isLoading, isError, message} = useSelector((state) => state.schools)
    useEffect(() => {
      if (isError){
        console.log(message)
      }
      if (!user) {
        navigate('/login')
      }
  
      dispatch(getSchools())
  
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
        dispatch(createSchool(userData))
        setFormData('')
    }
    if (isLoading){
        return <Spinner/>
    }
    return (
    <>
        <section className='heading'>
            <h1>
                <FaUser/> Add School
            </h1>
            {/* <p>Please Create an Account</p> */}
            {/* <CreateSchoolFrom/> */}
        </section>
        <section className='form'>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input className="form-control" id="name" type='text' name='name' value={name} placeholder='Enter school  name' onChange={onChange} />
                </div>
                <div className="form-group">
                    <input className="form-control" id="address" type='text' name='address' value={address} placeholder='Enter school address' onChange={onChange} />
                </div>
                <div className="form-group">
                    <input className="form-control" id="level" type='text' name='level' value={level} placeholder='Enter school level' onChange={onChange} />
                </div>
                <button className="btn btn-block form-group">Add School</button>
            </form>
        </section>
        
        <section className="content">
        {schools.length > 0 ? (
          <div className="schools">
            {schools.map((school) => (
                <SecondSchoolItem key={school._id} school={school}/>
            ))}
          </div>
        ) : (<h3>No schools found</h3>)}
      </section> 
      </>
  )
}

export default CreateSchool