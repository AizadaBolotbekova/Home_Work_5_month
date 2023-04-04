import React from 'react'
import { useLocation, useNavigate, useParams } from "react-router-dom"
function ItemPage()
{
    const { id } = useParams()
    const navigate = useNavigate()
    const location = useLocation()
    return (
    
        <div>
            <button onClick={() => navigate(-1)}>Back</button>
            <h3>Avtor: {location.state.name}</h3>
            <p> song: </p>  
            <p>{location.state.song}</p>
            
        </div>
  )
}

export default ItemPage