import { configureStore } from '@reduxjs/toolkit'
import carReducer from "./car.slice";

const store = configureStore({
    reducer:{
        carReducer:carReducer
    }
})

export const fn=()=>{
    console.log(store)
}

export default store