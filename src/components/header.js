import React from "react";
const Header = ({text})=>{
    return <nav className={"bg-skyblue flex items-center w-screen h-[52px] pl-2"}>
        <p className={"font-boo text-[1.4em] text-white"}><span className={"text-sandyBrown font-bsans"}>faceIO</span> {text!=null?text:"Student Login"}</p>
    </nav>
}
export default Header