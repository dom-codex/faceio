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
        password:"123456789"
    }
]
//handlers()
const saveToLocalStorage = (storageKey,data)=>{
localStorage.setItem(storageKey,data)
}
const clearLocalStorage = ()=>{
    localStorage.clear()
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
export {authStudent,saveToLocalStorage,clearLocalStorage}