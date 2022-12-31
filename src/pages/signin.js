import React from "react"

import GifLoader from "../components/loader"
import LoginContainer from "../components/signinComponent"
const SignInPage =()=>{
    const matricformHandler = (matric)=>{
        console.log(matric)
    }
    const passwordFormHandler = (password)=>{}
return <section className={"bg-skyblue pt-[36px] w-screen h-screen"}>
    {false&&<GifLoader/>}
    <div className={"w-[80%] m-auto rounded-md overflow-hidden min-h-[430px] bg-white/95 pt-[30px] backdrop-blur-md"}>
    <LoginContainer mode={"Student"} matricformHandler={matricformHandler} passwordFormHandler={passwordFormHandler}/>
    </div>
</section>
}
export default SignInPage