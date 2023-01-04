import React from "react"
import { getDepartments,getLevels } from "../data/database";
const ExamDetails = ({formHandler,values:{department,level,session,semester,course}})=>{
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
             <p className={"text-[1.35em] font-bsans underline text-center"}>Exam Details </p>
         </div>
         <div>
             <select value={department} onChange={departmentHandler} className={"w-[280px] block m-auto mb-2 border-2 border-gray-200 p-3 rounded-md"}>
                 <option>Select Department</option>
              {getDepartments().map(department=><option key={department.id} value={department.name}>{department.name}</option>)}
             </select>
             <select value={level} onChange={levelHandler} className={"w-[280px] block m-auto border-2 border-gray-200 p-3 rounded-md mb-2"}>
                 <option>Select Level</option>
                 {getLevels().map(level=><option key={level.id} value={level.name}>{level.name}</option>)}
             </select>
             <div>
                 <select value={semester} onChange={semesterHandler} className={"w-[280px] block m-auto border-2 border-gray-200 p-3 rounded-md mb-2"}>
                     <option>Select Semester</option>
                     <option value={"first"}>First Semester</option>
                     <option value={"second"}>Second Semester</option>
                 </select>
             </div>
             <div>
                 <input value={session} type={"text"} placeholder={"Session e.g 2022/2023"} className={"w-[280px] block m-auto border-2 border-gray-200 p-3 rounded-md mb-2"} onChange={sessionHandler}/>
             </div>
             <div>
                 <input value={course} type={"text"} placeholder={"Course Code CSC 111"} className={"w-[280px] block m-auto border-2 border-gray-200 p-3 rounded-md mb-2"} onChange={courseCodeHandler}/>
             </div>
         </div>
     </div>
 </div>
}
export default ExamDetails;