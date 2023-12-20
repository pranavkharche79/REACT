import React from "react"

export default class Say extends React.Component
{
    constructor()
    {
        super()
        this.state={msg:""}
    }


    handler=(event)=>{
       
        this.setState({msg:"hi"})
    }

    render(){
        return(
            <>
            <input 
               type="button" 
               value="say hi"
               style={{height:50,width:500}}
                onClick={this.handler}
            />
            <p>{this.state.msg}</p>
            </>
        )
    }
}