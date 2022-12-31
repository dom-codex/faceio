import React from "react"
import DashboardContainer from "../components/dashboardContainer"
import Header from "../components/header"
import IconButton from "../components/iconbutton"

//DUMMY DATA
const data = [{label:"Email",text:"gloflex@gmail.com"},{label:"Phone",text:"0810100000"},{label:"Gender",text:"Female"}]
//DUMMY DATA FOR SCHOOL DETAILS
const sdata = [{label:"Department",text:"Computer Science"},{label:"College",text:"Science"},{label:"Level",text:"400L"}]

const StudentDashBoard = ()=>{
    const logoutHandler = () =>{
        console.log("Logging out...")
    }
    const antiImpersonationHandler = ()=>{
        console.log("init....")
    }
return <section>
<Header/>
<DashboardContainer handler={
    antiImpersonationHandler
} data={data} sdata={sdata} status={false}/>
<div>
    <div><IconButton text={"logout"} handler={logoutHandler} icon={1} mode={"logout"}/></div>
</div>
</section>
}
export default StudentDashBoard