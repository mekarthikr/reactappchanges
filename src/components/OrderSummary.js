import { useNavigate } from "react-router-dom"


export function OrderSummary()
{
    const navigate=useNavigate()
    return(
        <div>
            Order Success
            <button onClick={()=>navigate(-1)}>Back</button>
        </div>
    );
}