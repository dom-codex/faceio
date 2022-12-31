import React from "react"

const InfoBanner = ({status}) =>{
    const bannerBg = status?"bg-mediumGreen   justify-center":"bg-sandyBrown justify-between"
 return <div className={`flex items-center w-[90%] h-[62px] m-auto ${bannerBg} px-3 font-bsans text-white tracking-wider`}>
     <p>Anti-Impersonation guard {status?"Activated ":"Not Activated"} </p>
    {!status&& <div>
         <button className={"hover:text-[1.2em] hover:text-orange-500"}>Activate</button>
     </div>}
 </div>
}
export default InfoBanner;