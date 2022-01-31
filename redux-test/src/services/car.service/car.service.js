import axiosService from "../axios.service/axios.service";
import {urls} from "../config/urls";


export const carService = {
    getAll:()=>axiosService.get(urls.cars).then(value => value.data),
    postCar:(car)=>axiosService.post(urls.cars,car).then(value=>value.data),
    deleteCar:(id)=>axiosService.delete(`${urls.cars}/${id}`).then(value => value.data),
    updateCar:({id,year,model,price})=>axiosService.patch(`${urls.cars}/${id}`,{model,price,year}).then(value => value.data)
}