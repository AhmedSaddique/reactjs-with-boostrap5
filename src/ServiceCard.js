import './App.css';
import {useState} from 'react';
import ServiceCardApi from './ServiceCardApi';

function ServiceCard() {
    let[Servicedata ,Serviceinfo]= useState(ServiceCardApi);

  return (
<>
<div class="container mt-5">
	<div className="row">
        {
          Servicedata.map((service , index)=>(
            <div className="col-md-4 col-sm-4">
            <div className="wrimagecard wrimagecard-topimage">
                  <a href="#">
                  <div className="wrimagecard-topimage_header" style={{backgroundColor:"rgba(187, 120, 36, 0.1"}} >
                    <center><i className={`${service.Icon}`} style={{color:"#BB7824"}}></i></center>
                  </div>
                  <div className="wrimagecard-topimage_title">
                    <h4>Charts
                    <div className="pull-right badge">{service.Head}</div></h4>
                    <div>
                        <p>{service.text}</p>
                    </div>
                  </div>
                </a>
              </div>
              </div>
          ))  
        }

     
      </div>
      </div>
</>
  );
}

export default ServiceCard;
