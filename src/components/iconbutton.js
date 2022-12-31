import React from "react"
import LoginIcon from "../images/login.png"
const IconButton = ({text})=>{
return <div className={"font-bsans overflow-hidden flex justify-center"}>
    <button className={"flex items-center justify-center w-[200px] rounded-md h-[48px] bg-mediumGreen hover:bg-mediumGreen/80 hover:border-mediumGreen hover:border-[2px]"}>
        {text}
        <img src={LoginIcon} alt={"login icon"} className={"w-[18px] h-[18px]"}/>
    </button>
</div>
}
export default IconButton