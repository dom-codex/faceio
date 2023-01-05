import React,{useState,useEffect} from "react"
import { useLocation } from "wouter"
import GifLoader from "../components/loader"
import LoginContainer from "../components/signinComponent"
import { authStudent, clearLocalStorage, extractDocumentFromSnapShot, saveToLocalStorage } from "../data/database"
import { authUsers } from "../firebaseconfi"
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
    const signInHandler = async()=>{
        try{
        setLoader(true)
        //const student = authStudent(matric,password)
        const docSnap = await authUsers("matric",{matric,password},"students")
        const {data:student} = extractDocumentFromSnapShot(docSnap)

        if(student[0] == null){
            setLoader(false)
            alert("invalid matric number/password")
            return
        }
        saveToLocalStorage("student",student[0])
        saveToLocalStorage("loggedIn",true)
        matricformHandler("")
        passwordFormHandler("")
        setLoader(false)
        setLocation("/student/dashboard")
    }catch(e){
        setLoader(false)
        alert("An error occured try again")
    }
    }
    useEffect(()=>{
        clearLocalStorage()
    },[])
return <section className={"bg-skyblue pt-[36px] w-screen h-screen"}>
    {showLoader&&<GifLoader/>}
    <div className={"w-[80%] m-auto rounded-md overflow-hidden min-h-[430px] bg-white/95 pt-[30px] backdrop-blur-md max-w-[560px]"}>
    <LoginContainer mode={"Student"} IdformHandler={matricformHandler} passwordFormHandler={passwordFormHandler} btnHandler={signInHandler}/>
    </div>
</section>
}
export default SignInPage