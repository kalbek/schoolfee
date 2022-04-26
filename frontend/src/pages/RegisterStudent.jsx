import {useState, useEffect} from 'react'
import {FaSchool, FaSignInAlt, FaChild} from 'react-icons/fa'
function RegisterStudent() {
    const [formData, setFormData] = useState({
        name: '',
        emai:'',
        password:'',
        pasword2:'',
    })

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
                <FaChild/> Register Student
            </h1>
            {/* <p>Please Login</p> */}
        </section>
        <section className='form'>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <select name="schools" id="schools" placeholder='Select your school' className="select-school"></select>
                </div>
                <div className="form-group">
                    <input className="form-control" id="name" name='name' type='name' value={name} placeholder='Enter student name' onChange={onChange} />
                </div>
                <div className="form-group">
                    <input className="form-control" id="email" name='email' type='email' value={email} placeholder='Enter your email' onChange={onChange} />
                </div>
                <div className="form-group">
                    <input className="form-control" id="password" name='password' type='password' value={password} placeholder='Enter your password' onChange={onChange} />
                </div>
                <button className="btn btn-block form-group">Register</button>
            </form>
        </section>
    </>
  )
}

export default RegisterStudent