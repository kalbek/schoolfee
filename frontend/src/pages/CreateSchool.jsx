import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import SchoolForm from '../components/SchoolForm'
import CreateSchoolForm from '../components/CreateSchoolForm'
import SchoolItem from '../components/SchoolItem'
import Spinner from '../components/Spinner'
import { getSchools,reset } from '../features/schools/schoolSlice'

function CreateSchool() {
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

    if (isLoading){
      return <Spinner/>
    }
    return (
      <> 
      <section>
        
      </section>
      <CreateSchoolForm/>

      
    </>
  )
}

export default CreateSchool