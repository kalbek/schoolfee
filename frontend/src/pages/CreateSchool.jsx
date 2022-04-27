import {useState, useEffect} from 'react'
import {FaPaypal, FaSchool, FaSignInAlt} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function CreateSchool() {
    const [formData, setFormData] = useState({
        name: '',
        emai:'',
        password:'',
        pasword2:'',
    })
    const navigate = useNavigate()
    const { user } = useSelector((state) => state.auth)
    useEffect(() => {
      if (!user) {
        navigate('/login')
      }
    }, [user, navigate])
    
    const {name, email, password, password2 } = formData
    const onChange = (e) => {
        setFormData((previousState) => ({
            ...previousState,
            [e.target.name] : e.target.value,
        }))
    }
    const onSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <>
    <section className='heading'>
            <h1>
                <FaSchool/> Add Schools
                <FaPaypal/>
            </h1>
            {/* <p>Please Login</p> */}
        </section>
        <section className='form'>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input className="form-control" id="name" name='name' type='name' value={name} placeholder='Enter school name' onChange={onChange} />
                </div>
                <div className="form-group">
                    <input className="form-control" id="email" name='email' type='email' value={email} placeholder='Enter your email' onChange={onChange} />
                </div>
                <div className="form-group">
                    <input className="form-control" id="password" name='password' type='password' value={password} placeholder='Enter your password' onChange={onChange} />
                </div>
                <button className="btn btn-block form-group">Add</button>
            </form>
        </section>
    </>
  )
}

export default CreateSchool
