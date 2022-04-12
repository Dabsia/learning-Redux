import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../store/auth'
import counterReducer from '../store/counter'


const store = configureStore({
    reducer: {counter : counterReducer, auth: authReducer }
})

export default store