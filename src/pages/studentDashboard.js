/*global someFunction, a*/
/*eslint no-undef: "error"*/
import React,{useState,useEffect} from "react"
import useLocation from "wouter/use-location"
import DashboardContainer from "../components/dashboardContainer"
import Header from "../components/header"
import IconButton from "../components/iconbutton"
import { clearLocalStorage, getItemFromStorage,updateBiometricStatus } from "../data/database"
import {getFaceIO} from "../faceio.js"
import {updateDocument} from "../firebaseconfi"
const StudentDashBoard = () => {
    const student = getItemFromStorage("student")
    const [biometricActive,setBiometricActive] = useState()
    const [location, setLocation] = useLocation()
    const logoutHandler = () => {
        clearLocalStorage()
        setLocation("/student/login")
    }
    const faceBiometricHandler = async() => {
        try{
    const fio = getFaceIO()
    const response = await fio.enroll({
        payload:{
            matric:student.matric,
            applicationId:student.applicationId
        }
    })
    //a6dfecb80cc249dd978a830c3da3d031fioa363e
    const docId = student.matric.split("/")[1]
    await updateDocument("students",docId,{
        facialBiometricActive:true,
        faceId:response.facialId
    })
    updateBiometricStatus(true)
    setBiometricActive(true)
}catch(e){
    alert("An error occurred, retry")
    setLocation("/student/dashboard")
    console.log(e)
}
    }
    const formatData = (type) => {
        if (type == "personal") {
            return [{ label: "Email", text: student.email }, { label: "Phone", text: student.phone }, { label: "Gender", text: student.gender }]
        }
        return [{ label: "Department", text: student.department }, { label: "College", text: student.college }, { label: "Level", text: student.level }]
    }
    useEffect(()=>{
        setBiometricActive(student.facialBiometricActive)
    },[])
    return <section>
        <Header text={"Student Dashboard"} />
        <DashboardContainer name={student.name} matric={student.matric} handler={
            faceBiometricHandler
        } data={formatData("personal")} sdata={formatData("")} status={biometricActive} />
        <div>
            <div><IconButton text={"logout"} handler={logoutHandler} icon={1} mode={"logout"} /></div>
        </div>
    </section>
}
export default StudentDashBoard