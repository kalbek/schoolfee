import { useEffect } from 'react'
import {FaChild, FaHome, FaSchool, FaSignInAlt, FaSignOutAlt, FaUber, FaUser} from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {logout, reset} from '../features/auth/authSlice'


function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.auth)

  const onLogout = () =>{
    dispatch(logout())
    dispatch(reset())
    navigate('/login')
  }

  
  useEffect(() => {
    return () => {
      dispatch(reset())
    }
  }, [user, navigate, dispatch])

  return (
      <header className='header'>
          <div className="logo">
            <ul>
              <li>
                <Link to='/'>
                    <FaHome /> Home
                </Link>
              </li>
              <li>
                <Link to='/createSchool'>
                    <FaSchool /> Add Schools
                </Link>
              </li>
              <li>
                <Link to='/registerStudent'>
                    <FaChild /> Regiter Student
                </Link>
              </li>
            </ul>
          </div>
          <ul>

          {user ? ( <li>
          <button className='btn' onClick={onLogout}>
              <FaSignOutAlt /> Logout
          </button>
        </li>) : (<>
          <li>
          <Link to='/register'>
              <FaUser /> Register
          </Link>
        </li>
        <li>
          <Link to='/login'>
              <FaSignInAlt /> Login
          </Link>
        </li>
          </>)}
          </ul>
      </header>
  )
}

export default Header