import {useState, useEffect} from 'react'
import {FaGofore, FaSignInAlt} from 'react-icons/fa'
function Register() {
    
    const [formData, setFormData] = useState({
        emai:'',
        password:'',
    })

    const {email, password } = formData
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
                <FaSignInAlt/> Login
            </h1>
            {/* <p>Please Login</p> */}
        </section>
        <section className='form'>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input className="form-control" id="email" name='email' type='email' value={email} placeholder='Enter your email' onChange={onChange} />
                </div>
                <div className="form-group">
                    <input className="form-control" id="password" name='password' type='password' value={password} placeholder='Enter your password' onChange={onChange} />
                </div>
                <button className="btn btn-block form-group">Login</button>
            </form>
        </section>
    </>
  )
}

export default Register