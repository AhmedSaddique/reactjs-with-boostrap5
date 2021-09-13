import './App.css';
import WorkApi from './WorkApi';
import {useState} from "react";

function Card() {

    let [carddata , infoCard] = useState (WorkApi);
    
  return (
<>

<div className="container">
    <div className="row border shadow rounded border-2">
        <div>
            <h1 class="text-center how-it mt-2">How it Work</h1>
        </div>
        {
            carddata.map((cardinfo , index)=>(
          

        <div className="col-md-4 mt-4 mb-4">
        <div className="card border-0" style={{width: "18rem;"}}>
            <div className="text-center icon mt-3">
            <i className={`  ${cardinfo.Icon} ` }></i>
            </div>
            <div className="card-body">
                <h5 className="card-title text-center "> {cardinfo.Head}</h5>
                <p className="card-text text-center my-2 mx-4"> {cardinfo.text}</p>
               
            </div>
</div>
        </div>
                
                ))
}
</div>

</div>


</>
 );}
 export default Card;