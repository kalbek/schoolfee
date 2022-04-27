import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {createSchool} from '../features/schools/schoolSlice'
// import {createSchool} from '../featues/schools/schoolSlice'
// import CreateSchool from '../pages/CreateSchool'


function SchoolForm() {
    const [text, setText] = useState('')
    
    const dispatch = useDispatch()
    const onSubmit = (e) =>{
        e.preventDefault()
        dispatch(createSchool({text}))
        setText('')
    }
  return (
    <>
    <section>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="text">School</label>
                <input 
                    type="text" 
                    name='text' 
                    id='text' 
                    value={text} 
                    onChange={(e) => setText(e.target.value)} 
                />
            </div>
            <div className="form-group">
                <button className="btn btn-block" type='submit'>
                    Create School 
                </button>
            </div>
        </form>
    </section>
    </>
  )
}

export default SchoolForm