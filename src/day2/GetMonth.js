import { useState } from "react"

export default function GetMonthName()
{
    let arr=["jan","feb","mar","apri","may","jun","jull","aug","sep","oct","nov","dec"];

    let[month,setmonth] = useState("not selected")
    function handler(event){
        let mon=parseInt(event.target.value)
        
        setmonth(arr[mon-1])
    }

    return(
        <div>
            <select onChange={handler}>
                <option>Select Month</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
            </select>

            <p>The Month Name is : {month}</p>
        </div>
    )
}