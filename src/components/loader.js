import React from "react"
import Loader from "../images/loader.gif"
const GifLoader = ()=>{
return <div className={"fixed z-10 w-screen h-screen top-0 left-0 bg-skyblue/20 flex justify-center items-center"}>
<img src={Loader} alt={"animated loader"} className={"h-[152px] w-[152px]"}/>
</div>
}
export default GifLoader