import React from "react"
export default class Hello extends React.Component{
    
    
    render(){
        return(
            <div style={{backgroundColor:"yellow"}}>
            <b><p style={{color:this.props.col}}>Hello {this.props.name}</p></b>
            </div>
        )
    }
}