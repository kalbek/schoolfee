import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {FaUser} from 'react-icons/fa'
import {register, reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'


function Register() {
    const [formData, setFormData] = useState({
        name: '',
        emai:'',
        password:'',
        pasword2:'',
    })

    const {name, email, password, password2 } = formData
    
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user, isLoading, isError, isSuccess, message} = useSelector(
        (state) => state.auth
    ) 

    useEffect(() => {
        if(isError){
            toast.error(message)
        }
        if (isSuccess || user){
            navigate('/')
        }

        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])
 

    const onChange = (e) => {
        setFormData((previousState) => ({
            ...previousState,
            [e.target.name] : e.target.value,
        }))
    }
    const onSubmit = (e) => {
        e.preventDefault()

        if(password != password2){
            toast.error('Passwords do not match')
        }else{
           const userData = {
            name,
            email,
            password,
           }

        dispatch(register(userData))
        }
    }
    if (isLoading){
        return <Spinner/>
    }
    return (
    <>
        <section className='heading'>
            <h1>
                <FaUser/> Register
            </h1>
            {/* <p>Please Create an Account</p> */}
        </section>
        <section className='form'>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input className="form-control" id="name" type='name' name='name' value={name} placeholder='Enter your name' onChange={onChange} />
                </div>
                <div className="form-group">
                    <input className="form-control" id="email" type='email' name='email' value={email} placeholder='Enter your email' onChange={onChange} />
                </div>
                <div className="form-group">
                    <input className="form-control" id="password" type='password' name='password' value={password} placeholder='Enter your password' onChange={onChange} />
                </div>
                <div className="form-group">
                    <input className="form-control" id="password2" type='password' name='password2' value={password2} placeholder='Confirm password' onChange={onChange} />
                </div>
                <button className="btn btn-block form-group">Register</button>
            </form>
        </section>
    </>
  )
}

export default Register