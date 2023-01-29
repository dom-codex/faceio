import React from "react";
import Pic from "../images/pic.jpg"
const ImageCard = ({mode,name,matric,url})=>{
return <div className={"shadow-md py-6 flex flex-col items-center w-[90%] m-auto rounded-md"}>
<img src={url} alt={"student image"} className={"w-[180px] h-[180px] rounded-[50%]"}/>
<p className={"text-[2.5em] font-boo font-bold tracking-wide"}>{name}</p>
<p className={"text-silver font-bsans text-[1.3em]"}>{matric}</p>
</div>
}
export default ImageCard;