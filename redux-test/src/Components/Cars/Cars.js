import {useEffect, useState} from "react";
import Car from "../Car/Car";
import {useDispatch, useSelector} from "react-redux";
import {getAllCars} from "../../store/car.slice";
import s from './Cars.module.css'

export default function Cars(){
    const {cars} =  useSelector(state => state['carReducer'])
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getAllCars())
    },[cars])
    return(
        <div className={s.container}>
            {cars ? cars.map(car=><Car key={car.id} item={car}/>) : null}
        </div>
    )
}