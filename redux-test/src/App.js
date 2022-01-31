
import './App.css';
import Car from "./Components/Car/Car";
import Form from "./Components/Form/Form";
import React, { useEffect, useState } from "react";
import Cars from "./Components/Cars/Cars";
import {Route, Routes} from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import CarsPage from "./Components/pages/CarsPage/CarsPage";
function App() {

    const [cars,setCars] = useState([])

    const getFormData=(data)=>{
        setCars([...cars, {id: new Date().getTime(), ...data}])
        console.log(cars)
    }

    const getCarId=(id)=>{
        setCars(cars.filter(car=> car.id !== id))
    }

  return (
    <div>
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route path={'cars'} element={<CarsPage/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
