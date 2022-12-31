import React from "react"
const DetailsCard = ({data})=>{
return <div className={"w-[90%] m-auto shadow-md bg-white py-4 pl-4 font-bsans"}>
    {data.map(({label,text},i)=><div key={i}>
        <CardInfo label={label} text={text}/>
    </div>)}
</div>
}
export default DetailsCard;
const CardInfo = ({label,text})=>{
    return <div className={"flex text-[1.3em]"}>
        <p className={"text-silver"}>{label}: </p>
        <p>{text}</p>
    </div>
}