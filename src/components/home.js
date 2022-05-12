import { useNavigate } from "react-router-dom";

export function Home ()
{
    const navigate=useNavigate()
    // render() {
        return (
            <>
                <h1>HOME</h1>
                <button onClick={()=>navigate('order-summary',{replace:true})}>Click Order</button>
            </>

        );
    // }
}