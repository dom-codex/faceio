import React,{useState,useEffect} from "react"
import useLocation from "wouter/use-location";
import GifLoader from "../components/loader";
import LoginContainer from "../components/signinComponent";
import { authSupervisor, clearLocalStorage } from "../data/database";
const SupervisorLogin = ()=>{
    const [id,setId] = useState("")
    const [password,setPassword] = useState("")
    const [loader,setLoader] =useState(false)
    const [location,setLocation] = useLocation()
    const IdformHandler = (id)=>{
        setId(id)
    }
    const passwordFormHandler = (password)=>{
        setPassword(password)
    }
    const signInHandler=()=>{
        setLoader(true)
        const supervisor = authSupervisor(id,password)
        if(supervisor ==null){
            setLoader(false)
            alert("Invalid Id/Password")
            return
        }
        setLoader(false)
        setLocation("/supervisor/dashboard")
    }
    useEffect(()=>{
        clearLocalStorage()
    },[])
return <section className={"w-screen h-screen "}>
    {loader&&<GifLoader/>}
    <LoginContainer IdformHandler={IdformHandler} passwordFormHandler={passwordFormHandler} btnHandler={signInHandler}/>
</section>
}
export default SupervisorLogin;