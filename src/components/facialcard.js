import React from "react"
import FacialIcon from "../images/facial.png"
import BeginIcon from "../images/begin.png"
import ExamDetails from "../components/examdetails"
const FacialCard = ({handler})=>{
return <div>
    <img src={FacialIcon} alt={"Facial recognition image"}
    className={"w-[280px] h-[280px] m-auto"}/>
    <ExamDetails/>
    <button onClick={handler} className={"flex items-center bg-mediumGreen p-2 px-4 rounded-sm m-auto my-4 hover:bg-mediumGreen/70"}>
        Begin Batch verification
        <img src={BeginIcon} alt={"begin icon"} className={"w-[18px] h-[18px] ml-2"}/>
    </button>
</div>
}
export default FacialCard;