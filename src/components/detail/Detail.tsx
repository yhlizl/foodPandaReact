import React from 'react'
import {useParams,useNavigate} from 'react-router-dom'

const Detail:React.FC= () => {
    let navigate = useNavigate();
    const {test} = useParams()
    return (    
        <div>
            <h1 onClick={()=>navigate("/")}>{test}s</h1>
        </div>
    )
}

export  {Detail}
