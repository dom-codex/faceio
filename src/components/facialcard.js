/*global someFunction, a*/
/*eslint no-undef: "error"*/
import React, { useState,useRef, useEffect } from "react"
import FacialIcon from "../images/facial.png"
import BeginIcon from "../images/begin.png"
import ExamDetails from "../components/examdetails"
import { saveToLocalStorage,getItemFromStorage, clearLocalStorage } from "../data/database"
import useLocation from "wouter/use-location"
import { getFaceIO } from "../faceio.js"
import OptionsDialog from "./optionsdialog"
const FacialCard = () => {
    const dialogRef = useRef()
    const [location, setLocation] = useLocation()
    const [department, setDepartment] = useState("")
    const [level, setLevel] = useState("")
    const [semester, setSemester] = useState("")
    const [session, setSession] = useState("")
    const [courseCode, setCourseCode] = useState("")
    const [btnText,setBtnText] = useState("Begin Batch Verification")
    const formHandler = (type, value) => {
        switch (type) {
            case "department": { setDepartment(value); break; }
            case "level": { setLevel(value); break; }
            case "semester": { setSemester(value); break; }
            case "session": { setSession(value); break; }
            case "coursecode": { setCourseCode(value); break; }
        }
    }
    const loadInput = ()=>{
        const inputs = JSON.parse(getItemFromStorage("examDetails"))
        if(inputs !=null || inputs !=undefined){
            formHandler("department",inputs.department)
            formHandler("level", inputs.level)
            formHandler("semester", inputs.semester)
            formHandler("session", inputs.session)
            formHandler("coursecode", inputs.courseCode) 
            setBtnText("Continue Batch Verification")  
        }
    }
    const clearInput = () => {
        formHandler("department", "")
        formHandler("level", "")
        formHandler("semester", "")
        formHandler("session", "")
        formHandler("coursecode", "")
    }
    const dialogPositive = ()=>{
        beginRecognition()
        hideDialog()
    }
    const dialogNegative = ()=>{
        hideDialog()
    }
    const showDialog = ()=>{
        dialogRef.current.displayDialog("User no recognised, do you want to retry?",dialogPositive,dialogNegative)
    }
    const hideDialog = ()=>{
        dialogRef.current.hideDialog()
    }
    const beginRecognition = async()=>{
           //launch widget
           try {
            const fio = getFaceIO()
            const response = await fio.authenticate({
                locale: "auto"
            });
            const applicationId = response.payload.applicationId
        setLocation(`/supervisor/lookup/${applicationId}`)
        } catch (e) {
            //show dialog
            showDialog()
            loadInput()
        }

    }
    const beginVerification = async () => {
        if (department.length && level.length && semester.length && session.length && courseCode.length) {
            const data = { department, level, semester, session, courseCode }
            saveToLocalStorage("examDetails", JSON.stringify(data));
            clearInput()
            await beginRecognition()
            
            return
        }
        alert("invalid input detected")
    }
    const resetForm = ()=>{
        clearLocalStorage("examDetails")
        setBtnText("Begin Batch Verification")
        clearInput()
    }

    useEffect(()=>{
        loadInput()
    },[])
    return <div>
        <OptionsDialog ref={dialogRef}/>
        <img src={FacialIcon} alt={"Facial recognition image"}
            className={"w-[280px] h-[280px] m-auto"} />
        <ExamDetails values={{department,level,session,semester,course:courseCode}} formHandler={formHandler} />
        <div className={"flex justify-center w-[80%] m-auto "}>
           <button onClick={beginVerification} className={"flex items-center bg-mediumGreen p-2 px-4 rounded-sm my-4 hover:bg-mediumGreen/70"}>
            {btnText}
            <img src={BeginIcon} alt={"begin icon"} className={"w-[18px] h-[18px] ml-2"} />
        </button>
           <button onClick={resetForm} className={"ml-3 text-sandyBrown hover:underline "}>Reset</button>
        </div>
      
    </div>
}
export default FacialCard;