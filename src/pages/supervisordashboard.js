import React from "react"
import FacialCard from "../components/facialcard"
import Header from "../components/header"
import IconButton from "../components/iconbutton"

const SupervisorDashboard = ()=>{
    const beginBiometricVerification = () =>{}
return <section>
<Header text={"Supervisor Dashboard"}/>
<div className={"flex justify-end mt-2 mr-2"}>
    //get download icon
</div>
<FacialCard handler={beginBiometricVerification}/>
</section>
}
export default SupervisorDashboard;