import React from "react"
import ImageCard from "./imagecard"
import InfoBanner from "./infobanner"
import DetailsCard from "./detailsCard"


const DashboardContainer = ({data,sdata,status, handler})=>{
return <div>
    <ImageCard name={"Glory Olije"} matric={"COT/3000/2018"}/>
<InfoBanner status={status} handler={handler} />
<DetailsCard data={data}/>
<div className={"my-4"}>
    <DetailsCard data={sdata}/>
</div>
</div>
}
export default DashboardContainer