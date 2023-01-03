import React from "react"
import { getDepartments,getLevels } from "../data/database";
const ExamDetails = ({formHandler})=>{
const departmentHandler = (e)=>{
formHandler("department",e.target.value)
}
const levelHandler = (e)=>{
    formHandler("level",e.target.value)
}
const semesterHandler =(e)=>{
    formHandler("semester",e.target.value)
}
const sessionHandler=(e)=>{
    formHandler("session",e.target.value)
}
const courseCodeHandler = (e) =>{
    formHandler("coursecode",e.target.value)
}

 return <div>
     <div>
         <div className={"my-2"}>
             <p className={"text-[1.35em] font-bsans underline"}>Select Class </p>
         </div>
         <div>
             <select onChange={departmentHandler} className={"w-[280px] block m-auto mb-2 border-2 border-gray-200 p-3 rounded-md"}>
                 <option>Select Department</option>
              {getDepartments().map(department=><option key={department.id} value={department.name}>{department.name}</option>)}
             </select>
             <select onChange={levelHandler} className={"w-[280px] block m-auto border-2 border-gray-200 p-3 rounded-md mb-2"}>
                 <option>Select Level</option>
                 {getLevels().map(level=><option key={level.id} value={level.name}>{level.name}</option>)}
             </select>
             <div>
                 <select onChange={semesterHandler} className={"w-[280px] block m-auto border-2 border-gray-200 p-3 rounded-md mb-2"}>
                     <option>Select Semester</option>
                     <option value={"first"}>First Semester</option>
                     <option value={"second"}>Second Semester</option>
                 </select>
             </div>
             <div>
                 <input type={"text"} placeholder={"Session e.g 2022/2023"} className={"w-[280px] block m-auto border-2 border-gray-200 p-3 rounded-md mb-2"} onChange={sessionHandler}/>
             </div>
             <div>
                 <input type={"text"} placeholder={"Course Code CSC 111"} className={"w-[280px] block m-auto border-2 border-gray-200 p-3 rounded-md mb-2"} onChange={courseCodeHandler}/>
             </div>
         </div>
     </div>
 </div>
}
export default ExamDetails;