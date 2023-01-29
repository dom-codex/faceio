import React,{useRef,useEffect,useState} from "react"
import { useReactToPrint } from "react-to-print";
import Header from "../components/header";
import IconButton from "../components/iconbutton";
import OptionsDialog from "../components/optionsdialog";
import { getAttandanceList, getItemFromStorage,extractDocumentFromSnapShot } from "../data/database";
import { findParticularDocument } from "../firebaseconfi";
import GifLoader from "../components/loader"
class AttendanceList extends React.Component{
    render (){
        const {supervisor,attendance,title} = this.props
        return  <div className={"w-[75%] m-auto"}>
                <p className={"text-center w-[65%] m-auto mt-4 font-bold"}> {title} </p>
            <div >
               
    <AttendanceRow name={"Name"} matric={"Matric No"} level={"Level"} timeIn={"Time In"}/>
     {
                    attendance.map((a,i)=><div key={i}>
                        <AttendanceRow name={a.name} matric={a.matric} level={a.level} timeIn={a.timeIn}/>
                    </div>)
                }
    

    <div className={"text-center"}>
        <p className={"font-bsans font-bold"}>Total Number of validated Candidates</p>
        <p className={"font-bold text-silver text-[1.3rem]"}>{attendance.length}</p>
    </div>
    <div className={"text-center"}>
        <p className={"font-bsans font-bold"}>Assisgned supervisor</p>
        <p className={"font-bold text-silver text-[1.3rem]"}>{supervisor}</p>
        </div>
</div></div>}
}
const Attendance = ()=>{
  const table = useRef()
  const [attendance,setAttendance] =useState([])
  const [loader,setLoader]= useState(true)
  const renderTitle = ()=>{
    const exam = JSON.parse(getItemFromStorage("examDetails"))
    return `Attendance for ${exam.session} ${exam.level} ${exam.courseCode} ${exam.semester} Semester Examination -${exam.department} Department`
}
  const printDoc = useReactToPrint({
      content:()=>table.current,
      documentTitle:renderTitle(),
            onAfterPrint:()=>{
         // alert("printed")
      }
  })
const supervisor = getItemFromStorage("supervisor")
//const attendance =getAttandanceList()
const getAttandanceList=async()=>{
    try{
    const exam = JSON.parse(getItemFromStorage("examDetails"))
    const session = exam.session.split("/")
    const collection = `${session[0]}${session[1]}${exam.level}${exam.courseCode}`
    const docSnap = await findParticularDocument("level",exam.level,collection)
    const {data} = extractDocumentFromSnapShot(docSnap)
    setAttendance(data)
    setLoader(false)
}catch(e){
    console.log(e)
    setLoader(false)
}
}
useEffect(()=>{
    getAttandanceList()
},[])
return <section>
    <Header text={""}/>
    {loader?<GifLoader/>:<div>
{false&&<OptionsDialog text={"Take me to homepage?"}/>}
<AttendanceList ref={table} supervisor={supervisor.name} attendance={attendance} title={renderTitle()}/>
<div className={"mt-4"}>
            <IconButton text={"Download as PDF"} handler={printDoc}/>
            </div>
            </div>}
</section>
}
export default Attendance;

const AttendanceRow = ({name,matric,level,timeIn})=>{
    return <div className={"flex justify-evenly items-center my-2 bg-orange-100 "}>
        <p className={"w-full text-center break-all p-2"}>{name}</p>
        <p className={"w-full text-center break-all p-2"}>{matric}</p>
        <p className={"w-full text-center break-all p-2"}>{level}</p>
        <p className={"w-full text-center break-all p-2"}>{timeIn}</p>
    </div>
}