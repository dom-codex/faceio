const students = [
    {
        name:"Olije Glory",
        matric:"COT/3467/2017",
        department:"Computer Science",
        college:"Science",
        level:"400L",
        email:"gloflex@gmail.com",
        phone:"08101063084",
        applicationId:"00AB56U",
        picId:0,
        password:"123456789",
        facialBiometricActive:false,
        gender:"FEMALE"
    }
]
const supervisor = {
    name:"Mr Dominic",
    id:"1234",
    password:"123456789"
}
//handlers()
const saveToLocalStorage = (storageKey,data)=>{
localStorage.setItem(storageKey,JSON.stringify(data))
}
const clearLocalStorage = ()=>{
    localStorage.clear()
}
const getItemFromStorage = (storageKey)=>{
return JSON.parse(localStorage.getItem(storageKey))
}
const authStudent = (matric,password)=>{
    console.log(matric)
    console.log(password)
    let student = null
    students.forEach(s=>{
        if(s.matric === matric && password === s.password){
            student = s
        }
    })
    return student
}
const authSupervisor = (id,password)=>{
    if(password===supervisor.password && id === supervisor.id){
        saveToLocalStorage("supervisor",JSON.stringify(supervisor))
        return supervisor
    }
    return null
}
export {authStudent,saveToLocalStorage,clearLocalStorage,getItemFromStorage,authSupervisor}