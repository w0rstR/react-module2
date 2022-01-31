import Form from "../../Form/Form";
import Cars from "../../Cars/Cars";
import s from './CarPage.module.css'
export default function CarsPage(){
    return(
        <div className={s.container}>
            <div className={s.form}>
                <Form/>
            </div>
            <div className={s.form}>
                <Cars/>
            </div>
        </div>
    )
}