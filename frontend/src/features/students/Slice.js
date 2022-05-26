import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import Service from './Service'
const initialState = {
    students: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}
//Create new Student
export const createStudent = createAsyncThunk('students/create', async (studentData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        // remove the token for no auth student creation
        return await Service.createStudent(studentData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Get Students
export const getStudents = createAsyncThunk('students/getAll', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        // remove the token for no auth student creation
        return await Service.getStudents(token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//Delete user Student
export const deleteStudent = createAsyncThunk('students/delete', async (id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        // remove the token for no auth student creation
        return await Service.deleteStudent(id, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})
export const Slice = createSlice({
    name: 'student',
    initialState,
    reducers: {
        reset: (state) => initialState
    }, 
    extraReducers: (builder) => {
        builder
        .addCase(createStudent.pending, (state) => {
            state.isLoading = true
        })
        .addCase(createStudent.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.students.push(action.payload)
        })
        .addCase(createStudent.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message(action.payload)
        })

        // to get students
        .addCase(getStudents.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getStudents.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.students = action.payload
        })
        .addCase(getStudents.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message(action.payload)
        })

        // to delete students
        .addCase(deleteStudent.pending, (state) => {
            state.isLoading = true
        })
        .addCase(deleteStudent.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.students = state.students.filter((student) => student._id !== action.payload.id)
        })
        .addCase(deleteStudent.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    },
})

export const {reset} = Slice.actions
export default Slice.reducer