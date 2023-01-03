import React, { useState } from "react"
import FacialIcon from "../images/facial.png"
import BeginIcon from "../images/begin.png"
import ExamDetails from "../components/examdetails"
import { saveToLocalStorage } from "../data/database"
import useLocation from "wouter/use-location"
const FacialCard = ({ handler }) => {
    const [location,setLocation] = useLocation()
    const [department, setDepartment] = useState("")
    const [level, setLevel] = useState("")
    const [semester, setSemester] = useState("")
    const [session, setSession] = useState("")
    const [courseCode, setCourseCode] = useState("")
    const formHandler = (type, value) => {
        switch (type) {
            case "department": { setDepartment(value); break; }
            case "level": { setLevel(value); break; }
            case "semester": { setSemester(value); break; }
            case "session": { setSession(value); break; }
            case "coursecode": { setCourseCode(value); break; }
        }
    }
const clearInput = ()=>{
    formHandler("department","")
    formHandler("level","")
    formHandler("semester","")
    formHandler("session","")
    formHandler("coursecode","")
}
    const beginVerification = () => {
        if (department.length && level.length && semester.length && session.length && courseCode.length) {
            const data = { department, level, semester, session, courseCode }
            saveToLocalStorage("examDetails",JSON.stringify(data));
            clearInput()
            //launch widget
            return
        }
        alert("invalid input detected")
    }
    return <div>
        <img src={FacialIcon} alt={"Facial recognition image"}
            className={"w-[280px] h-[280px] m-auto"} />
        <ExamDetails formHandler={formHandler} />
        <button onClick={beginVerification} className={"flex items-center bg-mediumGreen p-2 px-4 rounded-sm m-auto my-4 hover:bg-mediumGreen/70"}>
            Begin Batch verification
            <img src={BeginIcon} alt={"begin icon"} className={"w-[18px] h-[18px] ml-2"} />
        </button>
    </div>
}
export default FacialCard;