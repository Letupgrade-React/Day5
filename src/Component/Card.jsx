import React from 'react'
import Button from "./Button"
const Card = (props) => {
    //https://jsonplaceholder.typicode.com/photos/?albumId=2
    return(
        <div className="col-md-2  text-dark">
            <div className="card " >  
                <img
                    src={props.image}
                    className="card-img-top mt-2"
                    alt="..."
                    height={250}
                    style={{objectFit:"contain"}}
                />
                <div className="card-body">
                    <h6 className="card-title font-weight-bold" style={{
                        display: "-webkit-box", "WebkitLineClamp": 2,"WebkitBoxOrient": "vertical",overflow: "hidden","textOverflow": "ellipsis"
                    }}>{props.title}</h6>
                    <p className="card-text">
                    Rs.{props.price}
                    </p>
                    <Button text={"Buy Now"} className="col-12"></Button>
                </div>
            </div>
        </div>
 
   )
}

export default Card