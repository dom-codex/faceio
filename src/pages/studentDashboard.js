import React from "react"
import useLocation from "wouter/use-location"
import DashboardContainer from "../components/dashboardContainer"
import Header from "../components/header"
import IconButton from "../components/iconbutton"
import { clearLocalStorage, getItemFromStorage } from "../data/database"
const StudentDashBoard = () => {
    const student = getItemFromStorage("student")
    const [loaction, setLocation] = useLocation()
    const logoutHandler = () => {
        clearLocalStorage()
        setLocation("/student/login")
    }
    const antiImpersonationHandler = () => {
        console.log("init....")
    }
    const formatData = (type) => {
        if (type == "personal") {
            return [{ label: "Email", text: student.email }, { label: "Phone", text: student.phone }, { label: "Gender", text: student.gender }]
        }
        return [{ label: "Department", text: student.department }, { label: "College", text: student.college }, { label: "Level", text: student.level }]
    }
    return <section>
        <Header text={"Student Dashboard"} />
        <DashboardContainer name={student.name} matric={student.matric} handler={
            antiImpersonationHandler
        } data={formatData("personal")} sdata={formatData("")} status={student.facialBiometricActive} />
        <div>
            <div><IconButton text={"logout"} handler={logoutHandler} icon={1} mode={"logout"} /></div>
        </div>
    </section>
}
export default StudentDashBoard