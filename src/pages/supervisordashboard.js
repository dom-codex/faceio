import React from "react"
import FacialCard from "../components/facialcard"
import Header from "../components/header"
import IconButton from "../components/iconbutton"

const SupervisorDashboard = ()=>{
    const downloadHandler = () =>{}
return <section>
<Header/>
<div className={"flex justify-end mt-2 mr-2"}>
    //get download icon
<IconButton text={"Download Sheet"} handler={downloadHandler}/> </div>
<FacialCard/>
</section>
}
export default SupervisorDashboard;