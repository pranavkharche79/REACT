import { useEffect, useState } from "react";
import LifeCycleEx from "./day3/LifeCycleex";
// import LifeCycleFEx from "./LifecycleFex";
// import AjaxExF from "./day3/AjaxExF";
// import AjaxCEx from "./day3/Ajax_firstex";

// import AjaxWithReactF from "./AjaxExF2"; 


export default function App2()
{   let[flag,setflag] = useState(false)
    let[msg,setmsg] = useState("this is a msg")

    useEffect(()=>{
        console.log("App3 mounted")
    },[])


    useEffect(()=>{
        console.log("App3 message updated")
    },[msg])  

    useEffect(()=>{
        //console.log("App2 flag updated")
    },[flag])





    return(<>
    {/* <AjaxCEx></AjaxCEx> */}

    {/* <AjaxWithReactF></AjaxWithReactF> */}

     {/* <AjaxExF></AjaxExF> */}

        enter string: <input type="text" style={{backgroundColor:"yellow"}} onChange={(e)=>{
            setmsg(e.target.value)
        }}/><br></br>
        click : <input type="checkbox" 
        onClick={(e)=>{
            setflag(e.target.checked)
        }}/>
        {flag && <LifeCycleEx msg ={msg}></LifeCycleEx>}


       {/* {flag && <LifeCycleFEx msg={msg}></LifeCycleFEx>} */}
        </>
    )
}



