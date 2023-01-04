import React from "react"
class OptionsDialog extends React.PureComponent{
    text = ""
    positiveHandler = null
    negativeHandler = null
    state={
        showDialog:false
    }
    displayDialog = (txt,p,n)=>{
        this.text = txt
        this.positiveHandler = p
        this.negativeHandler = n
        this.setState({showDialog:true})
    }
    hideDialog = ()=>{
        this.text=""
        this.positiveHandler = null
        this.negativeHandler = null
        this.setState({showDialog:false})
    }
    render(){
        return <div className={`fixed top-0 left-0 w-screen h-screen bg-black/50 backdrop-blur-sm flex justify-center items-center ${this.state.showDialog?"flex":"hidden"}`}>
        <div className={""}>
            <p className={"text-white font-bold font-sans text-[1.3em]"}>Confirmation?</p>
            <p className={"text-gray-300"}>{this.text}</p>
            <div className={"mt-2 flex justify-center"}>
                <button onClick={this.negativeHandler} className={"bg-sandyBrown w-[80px] h-[32px] rounded-sm mx-2"}>No</button>
                <button onClick={this.positiveHandler} className={"bg-mediumGreen w-[80px] h-[32px] rounded-sm mx-2"}>Yes</button>
            </div>
        </div>
    </div>  
    }
}

export default OptionsDialog;