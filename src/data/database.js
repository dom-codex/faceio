const students = [
    {
        name: "Olije Glory",
        matric: "COT/3467/2017",
        department: "Computer Science",
        college: "Science",
        level: "400L",
        email: "gloflex@gmail.com",
        phone: "08101063084",
        applicationId: "00AB56U",
        picId: 0,
        password: "123456789",
        facialBiometricActive: true,
        gender: "FEMALE"
    }
]
let attendance = []
const supervisor = {
    name: "Mr Dominic",
    id: "1234",
    password: "123456789"
}
const departments = [{
    id: 0,
    name: "Computer Science"
}, {
    id: 1,
    name: "Physics"
}, {
    id: 2,
    name: "Mathematics"
}]
const college = [{
    id: 0,
    name: "Engineering"
},
{
    id: 1,
    name: "Science"
}]
const levels = [
    {
        id: 0,
        name: "100L"
    },
    {
        id: 1,
        name: "200L"
    },
    {
        id: 2,
        name: "300L"
    },
    {
        id: 3,
        name: "400L"
    },
    {
        id: 4,
        name: "500L"
    },
]
//handlers()
const saveToLocalStorage = (storageKey, data) => {
    localStorage.setItem(storageKey, JSON.stringify(data))
}
const clearLocalStorage = () => {
    localStorage.clear()
}
const getItemFromStorage = (storageKey) => {
    return JSON.parse(localStorage.getItem(storageKey))
}
const authStudent = (matric, password) => {

    let student = null
    students.forEach(s => {
        if (s.matric === matric && password === s.password) {
            student = s
        }
    })
    return student
}
const findStudentById = (id)=>{
    let student = null
    students.forEach(s=>{
        if(s.applicationId === id){
            student = s
        }
    })
    return student
}
const authSupervisor = (id, password) => {
    if (password === supervisor.password && id === supervisor.id) {
        saveToLocalStorage("supervisor", JSON.stringify(supervisor))
        return supervisor
    }
    return null
}
const getLevels =()=>{
    return levels
} 
const getDepartments=()=>{
    return departments
}
const getCollege = ()=>{
    return college
}
const addCandidateToAttendance = (student)=>{
 attendance.push(student)
}
const getAttandanceList = ()=>{
    console.log(attendance)
    return [...attendance]
}
const clearAttendance = ()=>{
    attendance = []
}
const updateBiometricStatus = (value)=>{
    const student = JSON.parse(getItemFromStorage("student"))
    saveToLocalStorage("student",{...student,facialBiometricActive:value})
}
export { authStudent, saveToLocalStorage, clearLocalStorage, getItemFromStorage, authSupervisor,getLevels,getDepartments,getCollege,findStudentById,addCandidateToAttendance,clearAttendance,getAttandanceList,updateBiometricStatus }