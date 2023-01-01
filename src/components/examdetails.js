import React from "react"
const ExamDetails = ()=>{
 return <div>
     <div>
         <div className={"my-2"}>
             <p className={"text-[1.35em] font-bsans underline"}>Select Class </p>
         </div>
         <div>
             <select className={"w-[280px] block m-auto mb-2 border-2 border-gray-200 p-3 rounded-md"}>
                 <option>Select Department</option>
                 <option>Chemical Engineeering</option>
                 <option>Computer Science</option>
                 <option>Electrical Engineering</option>
             </select>
             <select className={"w-[280px] block m-auto border-2 border-gray-200 p-3 rounded-md mb-2"}>
                 <option>Select Level</option>
                 <option>100L</option>
                 <option>200L</option>
                 <option>300L</option>
                 <option>400L</option>
             </select>
             <div>
                 <select className={"w-[280px] block m-auto border-2 border-gray-200 p-3 rounded-md mb-2"}>
                     <option>Select Semester</option>
                     <option>First Semester</option>
                     <option>Second Semester</option>
                 </select>
             </div>
             <div>
                 <input type={"text"} placeholder={"Session e.g 2022/2023"} className={"w-[280px] block m-auto border-2 border-gray-200 p-3 rounded-md mb-2"}/>
             </div>
             <div>
                 <input type={"text"} placeholder={"Course Code CSC 111"} className={"w-[280px] block m-auto border-2 border-gray-200 p-3 rounded-md mb-2"}/>
             </div>
         </div>
     </div>
 </div>
}
export default ExamDetails;