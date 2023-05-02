import { useParams } from "react-router-dom"
import { useState } from "react";
import "../TourDetails/TourDetails.css"
import { Link } from "react-router-dom";
export default function TourDetail({data}) {
    const {id} = useParams();
    const [shown,setShown] = useState(false)
    return (
        
       <>
       
        {data.map(tourinfo => {
            if (tourinfo.id === id) 
            return (
                <div className="forCardsDetail" key={id}>
                    <p className="para1">
                         {tourinfo.name}
                    </p>
                    <p className="para1">
                        Description: {shown ? `${tourinfo.info}`: `${tourinfo.info.substring(0,70)}`}   
                        <Link className="button1" onClick={()=> setShown(!shown)}>{shown ? "....See Less": "...See More" }</Link>
                    </p>
                    <p className="para1">
                    Price : {tourinfo.price}$ 
                    </p>
                   
                    <img src={tourinfo.image}></img>
                    
                </div>
                
            )
            
        })}
       
       </>
    )
}