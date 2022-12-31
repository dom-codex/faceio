import React from "react"
import MatricIcon from "../images/matric.png"
import PasswordIcon from "../images/password.png"
const FormInput = ({inputType,placeholder,inputHandler,icon})=>{
    const formHandler = (e)=>{
        inputHandler(e.target.value)
    }
    const iconSelector = ()=>{
        switch(icon){
            case 0:{
                return MatricIcon
            }
            case 1:{
                return PasswordIcon
            }
        }
    }
return <div className={"relative w-full h-[42px] font-bsans"}>
<img src={iconSelector()} alt="Matric input" className={"absolute left-[8px] w-[16px] h-[16px] top-[13px]"}/>
<input type={inputType} placeholder={placeholder} onChange={formHandler} className={"h-full w-full pl-[32px] bg-black/10 outline-skyblue/40"}/>
</div>
}
export default FormInput