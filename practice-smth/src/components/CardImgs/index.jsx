import { data } from "./data";
import './style.css'

export const CardImgs =()=>{
return(<>
    {data.map(({img,title})=>(
        // eslint-disable-next-line react/jsx-key
        <div className="Img-card">
            <img src={img}/>
            <h3 >{title}</h3>
            <span>29 Avq 2021</span>
        </div>
    ))}
</>)
}