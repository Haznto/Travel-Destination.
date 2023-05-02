import { Link } from "react-router-dom"
export default function Tour({name,image,price,id,info}) {
    return (
        <Link className="Link" to={`/city/${id}`}>
                    <div className='cards' key={id}  style={{
                        display: "flex",
                        flexDirection: "column"
                    
                      }}>
                        <h2 >{name}</h2>
                        <img  src={image} alt={name}/>
                    </div>
        </Link>
    )
}