import React from "react"
import DashboardContainer from "../components/dashboardContainer"
import Header from "../components/header"
import IconButton from "../components/iconbutton"
//DUMMY DATA
const data = [{label:"Email",text:"gloflex@gmail.com"},{label:"Phone",text:"0810100000"},{label:"Gender",text:"Female"}]
//DUMMY DATA FOR SCHOOL DETAILS
const sdata = [{label:"Department",text:"Computer Science"},{label:"College",text:"Science"},{label:"Level",text:"400L"}]

const LookUpResult = ()=>{
return <section>
<Header/>
<p className={"mt-4 text-[1.35em] font-bsans text-sandyBrown"}>Facial Lookup Result</p>
<DashboardContainer sdata={sdata} data={data} handler={()=>{}} hideBanner={true}/>
<div className={"flex justify-center mb-4"}>
    <IconButton text={"Submit Checklist"} mode={"submit"}/>
    <IconButton text={"Next Candidate"} mode={"next"}/>
</div>
</section>
}
export default LookUpResult;