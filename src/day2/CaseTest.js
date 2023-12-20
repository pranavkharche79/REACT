import React from "react";

export default class Halfstring extends React.Component{
    constructor(){
        super()
        this.state={o_str:"",rev:"",str:""}
    }


    string=(event)=>{
        this.setState({o_str:event.target.value,str:event.target.value})
    }

    reverse=(event)=>{
        if(event.target.checked){
            let s= this.state.str
            let r=""
            for (let index = s.length-1; index >=0;index--){
                r += s.charAt(index)
            }
            this.setState({str:r,rev:r})
   }
    else{
        this.setState({str:this.state.o_str})
        }
    }


    radio=(event)=>{

        switch(event.target.id){
                case "lc" : {
                let s = this.state.str
                let s1 = s.toLowerCase()
                this.setState({str:s1})
                break;
                }
                case "uc" : {
                let s = this.state.str
                let s1 = s.toUpperCase()
                this.setState({str:s1})
                break;
            }
                case "tc" : {
                    let s = this.state.str
                    let s1 = s.charAt(0).toUpperCase()
                    let s2 =  s.substring(1).toLowerCase()
                    this.setState({str:s1+s2})
                break;
            }
            default : break;
        }
    }

Halfstring=()=>{
    let s = this.state.str
    let s1 = s.substring(0,s.length/2).toUpperCase()
    this.setState({str:s1})
}

    render(){

        return(
            <>
            Enter String: <input type="text" onBlur={this.string} /><br></br><br></br>
            Reverse: <input type="checkbox" onClick={this.reverse}/><br></br>
            Half String : <input type="checkbox" onClick={this.Halfstring} /><br></br>
            LC: <input type="radio" name="btn" id="lc" onClick={this.radio}></input>
            TC: <input type="radio" name="btn" id="tc" onClick={this.radio}></input>
            UC: <input type="radio" name="btn" id="uc" onClick={this.radio}></input>
            <p> {this.state.str}</p>
            </>
        )
    }
}