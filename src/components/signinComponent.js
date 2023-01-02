import React from "react"
import FormInput from "./formInput"
import IconButton from "./iconbutton"
import Logo from "../images/logo-fupre.png"
const LoginContainer = ({mode,IdformHandler,passwordFormHandler,btnHandler})=>{
   const modePlaceHolderSelector=()=>{
       if(mode=="Student"){
           return "Matric Number"
       }else{
           return "Supervisor ID"
       }
   }
return <div className={"flex flex-col items-center pt-[18px] "}>
<img src={Logo} alt={"school logo"} className={"w-[100px] h-[100px]"}/>
<p className={"text-[2em] font-boo mb-2"}><span className={"font-sans text-sandyBrown"}>FaceIO</span> {mode} Login</p>
<div className={"w-[85%] mb-2"}>
<FormInput placeholder={modePlaceHolderSelector()} type={"text"} inputHandler={IdformHandler} icon={0}/>
</div>
<div className={"w-[85%] mb-2"}>
<FormInput placeholder={"password"} type={"password"} inputHandler={passwordFormHandler} icon={1}/>  
</div>
<div className={"w-[85%] mb-2 mt-2"}>
<IconButton text={"Login"} handler={btnHandler}/> </div>
</div>
}
export default LoginContainer