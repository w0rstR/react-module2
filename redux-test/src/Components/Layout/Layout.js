import {Link, Outlet} from "react-router-dom";
import s from './Layout.module.css'

export default function Layout(){
    return(
        <div>
            <div className={s.container}>
                <div><Link to={'cars'}><p className={s.item}>To Cars</p></Link></div>
                <div><Link to={'users'}><p className={s.item}>To users</p></Link></div>
            </div>
            <Outlet/>
        </div>

    )
}