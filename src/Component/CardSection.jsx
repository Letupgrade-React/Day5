import { useEffect, useState } from "react"
import Card from "./Card"
import details from "./details.json"

const CardSection = ()=>{
    const [data, setData]=useState([])
    useEffect(()=>{
       setData(details)
    }, [])
    return (
        <div className="text-center row col-12 mx-auto">
            {
                data.map((e)=><Card key={e.id} {...e}/>)
            }
        </div>
    )
}

export default CardSection