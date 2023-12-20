import React from "react";

export default class Student extends React.Component{
    constructor(){
        super()
        this.state={flag:false}
    }

  

    render(){
        function Edudetails() {
            return(
                <div >
                SSC : 80%
                <br></br>
                HSC : 89%
                <br></br>
                CET :89.12
            </div>
            )
        }
        return(
            <>
            <p>
            Name    :  Silvy
<br></br>
            Email : silvy@gmail.com
            <br></br>
            DOB : 22/02/2003
            </p>
            Education Details : <input type="checkbox" onClick={(c)=>{
                this.setState({flag:c.target.checked})           
                }}/>
            {this.state.flag && <Edudetails></Edudetails>}
            </>
        )
    }
}