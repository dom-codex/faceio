import React from "react"
import ImageCard from "./imagecard"
import InfoBanner from "./infobanner"
import DetailsCard from "./detailsCard"
import { getItemFromStorage } from "../data/database"


const DashboardContainer = ({data,sdata,status, handler,hideBanner})=>{
const student = getItemFromStorage("student")
return <div>
    <ImageCard name={student.name} matric={student.matric}/>
{!hideBanner&&<InfoBanner status={status} handler={handler} />}
<DetailsCard data={data}/>
<div className={"my-4"}>
    <DetailsCard data={sdata}/>
</div>
</div>
}
export default DashboardContainer