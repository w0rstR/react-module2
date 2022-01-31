import s from './Car.module.css'
import {addToForm, carDelete, deleteCar, foo, updateCar} from "../../store/car.slice";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

export default function Car({item}){
    const {id,model,price,year} = item
    const dispatch = useDispatch()


    return(
        <div className={s.container}>
            <div>
                <div>Model: {model}</div>
                <div>Price: {price}</div>
                <div>Year: {year}</div>
            </div>
            <button onClick={()=>dispatch(carDelete({id}))} className={s.btn}>Delete</button>
            <button onClick={()=>dispatch(addToForm({item}))}  className={s.btn}>Update</button>
        </div>
    )
}