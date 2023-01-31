import React, { useState, useRef, useEffect } from "react"
import useLocation from "wouter/use-location"
import DashboardContainer from "../components/dashboardContainer"
import Header from "../components/header"
import IconButton from "../components/iconbutton"
import { addCandidateToAttendance, extractDocumentFromSnapShot, findStudentById, getFormattedTimeOnly, getItemFromStorage } from "../data/database"
import OptionsDialog from "../components/optionsdialog"
import { getFaceIO } from "../faceio"
import { createNewDocument, findParticularDocument,getUrl,getStorageRef } from "../firebaseconfi"
import GifLoader from "../components/loader"
const LookUpResult = ({ matric }) => {
    const dialogRef = useRef()
    const [student, setStudent] = useState(null)
    const [loader,setLoader] = useState(true)
    const [url,setUrl] = useState("")
    const [location, setLocation] = useLocation()
    // const student = findStudentById(matric)
    const getImageUrl = async()=>{
        const imgRef= getStorageRef(student.picId)
       const imgUrl = await getUrl(imgRef)
        setUrl(imgUrl)
    }
    const showDialog = (text, p, n) => {
        dialogRef.current.displayDialog(text, p, n)
    }
    const hideDialog = () => {
        dialogRef.current.hideDialog()
    }
    const declineEntry = () => {
        showDialog("Are you sure you dont't want to include this candidate", () => {
            hideDialog()
            setLocation("/supervisor/dashboard")
        }, () => {
            hideDialog()
        })

    }
    const beginRecognition = async () => {
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
            showDialog("User not found,Do you want to retry?", () => {
                beginRecognition()
            }, () => {
                hideDialog()
            })
        }

    }
    const addCandidateToAttendanceList=async()=>{
        const examDetails = JSON.parse(getItemFromStorage("examDetails"))
        const session = examDetails.session.split("/")
        await createNewDocument({
            name:student.name,
            matric:student.matric,
            level:student.level,
            timeIn:getFormattedTimeOnly()
        },`${session[0]}${session[1]}${examDetails.level}${examDetails.courseCode}`)
    }
    const nextCandidateHandler = async() => {
        const examDetails = JSON.parse(getItemFromStorage("examDetails"))
        const session = examDetails.session.split("/")
        //add student to attendance list
        const docSnap = await findParticularDocument("matric",student.matric,`${session[0]}${session[1]}${examDetails.level}${examDetails.courseCode}`)
        const {hasData} = extractDocumentFromSnapShot(docSnap)
        if(!hasData){
        await addCandidateToAttendanceList()
        }
       // addCandidateToAttendance({ ...student, timeIn: Date.now().toLocaleString() })
        //relaunc widget
        beginRecognition()

    }
    const submitHandler = () => {
        showDialog("Are you sure you want to submit checklist?", async() => {
            const examDetails =JSON.parse( getItemFromStorage("examDetails"))
            //add student to attendance list
            const session = examDetails.session.split("/")

            const docSnap = await findParticularDocument("matric",student.matric,`${session[0]}${session[1]}${examDetails.level}${examDetails.courseCode}`)
            const {hasData} = extractDocumentFromSnapShot(docSnap)
            if(!hasData){
            await addCandidateToAttendanceList()
            }
            //nav to attendance
            setLocation("/exam/attendance")
        }, () => {
            hideDialog()
        })
    }
    const findStudent = async () => {
        try {
            const docSnap = await findParticularDocument("applicationId", matric, "students")
            const { data } = extractDocumentFromSnapShot(docSnap)
            setStudent(data[0])
            setLoader(false)
            getImageUrl()
        } catch (e) {
            console.log(e)
            setLoader(false)
        }
    }
    useEffect(() => {
        if (student == null) {
             findStudent()
        }
    }, [])

    const formatData = (type) => {
        if (type == "personal") {
            return [{ label: "Email", text: student.email }, { label: "Phone", text: student.phone }, { label: "Gender", text: student.gender }]
        }
        return [{ label: "Department", text: student.department }, { label: "College", text: student.college }, { label: "Level", text: student.level }]
    }
    return <section>
       {loader?<GifLoader/>  : <div> <OptionsDialog ref={dialogRef} />
        <Header text={"Student Lookup result"} />
        <div className={"max-w-[760px] mx-auto"}>
        <p className={"mt-4 text-[1.35em] font-bsans text-sandyBrown text-center"}>Facial Lookup Result</p>
        <DashboardContainer url={url} sdata={formatData("personal")} data={formatData()} handler={() => { }} hideBanner={true} name={student.name} matric={student.matric} />
        <div className={"flex justify-center mb-4"}>
            <IconButton text={"Submit Checklist"} mode={"submit"} handler={submitHandler} />
            <IconButton text={"Next Candidate"} mode={"next"} handler={nextCandidateHandler} />
        </div>
        <div className={"my-8 text-center"}>
            <button className={"text-red-500 hover:text-red-600 hover:border-2 hover:border-red-500 hover:p-2 rounded-md"} onClick={declineEntry}> Decline Entry</button>
        </div>
        </div>
        </div>}
    </section>
}
export default LookUpResult;