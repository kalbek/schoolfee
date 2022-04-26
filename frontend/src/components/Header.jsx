import {FaAd, FaAlgolia, FaChild, FaHome, FaHooli, FaPlus, FaSchool, FaSignInAlt, FaSignOutAlt, FaUber, FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Header() {
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
          </ul>
      </header>
  )
}

export default Header