import React,{useRef} from "react"
import { useReactToPrint } from "react-to-print";
import Header from "../components/header";
import IconButton from "../components/iconbutton";
import OptionsDialog from "../components/optionsdialog";

class AttendanceList extends React.Component{
    render (){
        return  <div className={"w-[75%] m-auto"}>
                <p className={"text-center w-[65%] m-auto mt-4 font-bold"}> Attendance for 2022/2023 100L CSC 111 First Semester Examination -Computer Science Department  </p>
            <div >
    <AttendanceRow name={"Name"} matric={"Matric No"} level={"Level"} timeIn={"Time In"}/>
    <AttendanceRow name={"Glory dlgfkfgkfglkfglkfglfgklfgklfgklfglkfgklfglkfgkl"} matric={"COT/3467/2017"} level={"100L"} timeIn={"2023-01-01"}/>
    <AttendanceRow name={"Glory"} matric={"COT/3467/2017"} level={"100L"} timeIn={"2023-01-01"}/>

    <div className={"text-center"}>
        <p className={"font-bsans font-bold"}>Total Number of validated Candidates</p>
        <p className={"font-bold text-silver text-[1.3rem]"}>2</p>
    </div>
    <div className={"text-center"}>
        <p className={"font-bsans font-bold"}>Assisgned supervisor</p>
        <p className={"font-bold text-silver text-[1.3rem]"}>Dominic West Aka RR Hunter</p>
        </div>
</div></div>}
}
const Attendance = ()=>{
  const table = useRef()
  const printDoc = useReactToPrint({
      content:()=>table.current,
      documentTitle:"Attendance for 2022/2023 100L CSC 111 First Semester Examination -Computer Science Department",
            onAfterPrint:()=>{
         // alert("printed")
      }
  })
return <section>
    <Header text={""}/>
<OptionsDialog text={"Take me to homepage?"}/>
<AttendanceList ref={table}/>
<div className={"mt-4"}>
            <IconButton text={"Download as PDF"} handler={printDoc}/>
            </div>
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