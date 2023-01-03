import React from "react"
import useLocation from "wouter/use-location"
import DashboardContainer from "../components/dashboardContainer"
import Header from "../components/header"
import IconButton from "../components/iconbutton"
import { addCandidateToAttendance, findStudentById } from "../data/database"
const LookUpResult = ({matric})=>{
    const [location,setLocation] = useLocation()
    const student = findStudentById(matric)
    const declineEntry = ()=>{
        //relaunc widget
    }
    const nextCandidateHandler=()=>{
        //add student to attendance list
        addCandidateToAttendance({...student,timeIn:Date.now().toLocaleString()})
        //relaunc widget
    }
    const submitHandler = ()=>{
        //add to attendance
        addCandidateToAttendance({...student,timeIn:Date.now().toLocaleString()})
        //nav to attendance
        setLocation("/exam/attendance")
    }
    if(student==null){
        //show dialog
        //relunch widget
        return
    }
    const formatData = (type)=>{
        if(type=="personal"){
            return [{label:"Email",text:student.email},{label:"Phone",text:student.phone},{label:"Gender",text:student.gender}]
        }
        return [{label:"Department",text:student.department},{label:"College",text:student.college},{label:"Level",text:student.level}]
        }
return <section>
<Header text={"Student Lookup result"}/>
<p className={"mt-4 text-[1.35em] font-bsans text-sandyBrown"}>Facial Lookup Result</p>
<DashboardContainer sdata={formatData("personal")} data={formatData()} handler={()=>{}} hideBanner={true}/>
<div className={"flex justify-center mb-4"}>
    <IconButton text={"Submit Checklist"} mode={"submit"} handler={submitHandler}/>
    <IconButton text={"Next Candidate"} mode={"next"} handler={nextCandidateHandler}/>
</div>
<div className={"my-8"}>
    <button className={"text-red-500 hover:text-red-600 hover:border-2 hover:border-red-500 hover:p-2 rounded-md"} onClick={declineEntry}> Decline Entry</button>
</div>
</section>
}
export default LookUpResult;