import React from "react"
const OptionsDialog = ({text})=>{
return <div className={"fixed top-0 left-0 w-screen h-screen bg-black/50 backdrop-blur-sm flex justify-center items-center"}>
    <div className={""}>
        <p className={"text-white font-bold font-sans text-[1.3em]"}>Confirmation?</p>
        <p className={"text-gray-300"}>{text}</p>
        <div>
            <button className={"bg-sandyBrown w-[80px] h-[32px] rounded-sm mx-2"}>No</button>
            <button className={"bg-mediumGreen w-[80px] h-[32px] rounded-sm mx-2"}>Yes</button>
        </div>
    </div>
</div>

}
export default OptionsDialog;