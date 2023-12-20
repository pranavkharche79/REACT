import {useState} from "react"

export default function Showlist(){

    let[table,settable]=useState(false)
    let[ol,setol]=useState(false)
    let[ul,setul]=useState(false)

    let arr=["red","green","blue","yellow","pink","purple","white","black"]
    let[arr2,setarr2]=useState([])

    function handler(ch){
        switch (ch) {
            case "table":{
                settable(true)
                setol(false)
                setul(false)
                let arr2=arr.map((ele,ind)=>{
                    return <tr><td>{ind+1}</td><td></td>{ele}</tr>
                })
                setarr2(arr2)
                break;
            }
            case "ol":{
                setol(true)
                settable(false)
                setul(false)
                let arr2=arr.map((ele)=>{
                    return <li>{ele}</li>
                })
                setarr2(arr2)
                break;
            }
            case "ul":{
                setul(true)
                setol(false)
                settable(false)
                let arr2=arr.map((ele)=>{
                    return <li>{ele}</li>
                })
                setarr2(arr2)
                break;
            }
            default:
                break;
        }
    }


    
        return(
            <>
            Table Format: <input type="radio" name="format" onClick={()=>handler("table")}/>
            <br></br>
            OL: <input type="radio" name="format" onClick={()=>handler("ol")}/>
            <br></br>
            UL: <input type="radio" name="format" onClick={()=>handler("ul")}/>
            <br></br>
            {table && <table border="1">{arr2}</table>}
            {ol && <ol>{arr2}</ol>}
            {ul && <ul>{arr2}</ul>}
            </>
        )
}
