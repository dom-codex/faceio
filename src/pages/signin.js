import React,{useState,useEffect} from "react"
import { useLocation } from "wouter"
import GifLoader from "../components/loader"
import LoginContainer from "../components/signinComponent"
import { authStudent, clearLocalStorage, saveToLocalStorage } from "../data/database"
const SignInPage =()=>{
    const [location,setLocation] = useLocation()
    const [matric,setMatric] = useState("")
    const [password,setPassword] = useState("")
    const [showLoader,setLoader]=useState(false)
    const matricformHandler = (matric)=>{
        setMatric(matric)
    }
    const passwordFormHandler = (password)=>{
        setPassword(password)
    }
    const signInHandler = ()=>{
        setLoader(true)
        const student = authStudent(matric,password)
        if(student == null){
            setLoader(false)
            alert("invalid matric number/password")
            return
        }
        saveToLocalStorage("student",student)
        saveToLocalStorage("loggedIn",true)
        matricformHandler("")
        passwordFormHandler("")
        setLoader(false)
        setLocation("/student/dashboard")

    }
    useEffect(()=>{
        clearLocalStorage()
    },[])
return <section className={"bg-skyblue pt-[36px] w-screen h-screen"}>
    {showLoader&&<GifLoader/>}
    <div className={"w-[80%] m-auto rounded-md overflow-hidden min-h-[430px] bg-white/95 pt-[30px] backdrop-blur-md"}>
    <LoginContainer mode={"Student"} IdformHandler={matricformHandler} passwordFormHandler={passwordFormHandler} btnHandler={signInHandler}/>
    </div>
</section>
}
export default SignInPage