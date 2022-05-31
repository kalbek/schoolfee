import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../components/Spinner'
import { reset } from '../features/schools/schoolSlice'

function Dashboard() {
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

    // dispatch(getSchools())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

    if (isLoading){
      return <Spinner/>
    }
    return (
      <> 
      <section>
        {/* <h4 className='user-name'>Welcome {user && user.name.charAt(0).toUpperCase()+ user.name.slice(1)}</h4> */}
        <h1>Dashboard</h1>
      </section>
      {/* <SchoolForm/> */}

      {/* <section className="content">
        {schools.length > 0 ? (
          <div className="schools">
            {schools.map((school) => (
                <SchoolItem key={school._id} school={school}/>
            ))}
          </div>
        ) : (<h3>No schools found</h3>)}
      </section> */}
      
    </>
  )
}

export default Dashboard