import React,{useState,useEffect} from "react"
import useLocation from "wouter/use-location";
import GifLoader from "../components/loader";
import LoginContainer from "../components/signinComponent";
import { authSupervisor, clearLocalStorage, extractDocumentFromSnapShot, saveToLocalStorage } from "../data/database";
import { authUsers } from "../firebaseconfi";
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
    const signInHandler=async()=>{
        setLoader(true)
        //const supervisor = authSupervisor(id,password)
        const docSnap = await authUsers("id",{matric:id,password},"supervisors")
        const {data:supervisor} = extractDocumentFromSnapShot(docSnap)
        if(supervisor[0] ==null){
            setLoader(false)
            alert("Invalid Id/Password")
            return
        }
        const dataToSave = supervisor[0]
        delete dataToSave["snapshot"]
        saveToLocalStorage("supervisor",dataToSave)
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