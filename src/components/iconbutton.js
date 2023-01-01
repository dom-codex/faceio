import React from "react"
import LoginIcon from "../images/login.png"
const IconButton = ({text,icon,mode,handler})=>{
    const backgroudSelector = ()=>{
        if(mode=="login"){
            return "bg-mediumGreen hover:bg-mediumGreen/80 hover:border-mediumGreen"
        }else if(mode =="logout"){
            return "bg-red-400 hover:bg-red-600 hover:border-red-500 text-white"
        }else if(mode=="submit"){
            return "bg-sandyBrown hover:bg-sandyBrown/80 hover:border-sandyBrown mr-2"
        }
        else if(mode =="next"){
            return "bg-skyblue hover:bg-skyblue/80 hover:border-skyblue"
        }
        else{
          return "bg-mediumGreen hover:bg-mediumGreen/80 hover:border-mediumGreen"  
        }
    }
return <div className={"font-bsans overflow-hidden flex justify-center"}>
    <button onClick={handler} className={`flex items-center justify-center w-[200px] rounded-md h-[48px]  hover:border-[2px] ${backgroudSelector()}`}>
        {text}
        <img src={LoginIcon} alt={"login icon"} className={"w-[18px] h-[18px]"}/>
    </button>
</div>
}
export default IconButton