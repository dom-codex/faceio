import React from "react"
import LoginContainer from "../components/signinComponent";

const SupervisorLogin = ()=>{
    const IdformHandler = (id)=>{}
    const passwordFormHandler = (password)=>{}
return <section className={"w-screen h-screen "}>
    <LoginContainer IdformHandler={IdformHandler} passwordFormHandler={passwordFormHandler}/>
</section>
}
export default SupervisorLogin;