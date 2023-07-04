import { Outlet } from "react-router-dom"

export default function Home (){
    return <>
        <h2>This is home page</h2>
        <Outlet></Outlet>
    </>
}