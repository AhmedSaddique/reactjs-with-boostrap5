import './App.css';
import HomeP3Api from './HomeP3Api';
import {useState} from 'react'



function HomeP3() {

    let[home3data ,home3infi]= useState(HomeP3Api);
    return(
<>
<div className="container mt-5">
<div className="row">
  
    <div className="col-md-2"></div>

    
    <div className="col-12 col-md-6">
        <div className="row">
            {
              home3data.map((homedata , index)=>(
                <div className="col-md-12">
                <div>
                    <h5 className="home3-h">{homedata.num}</h5>
                </div>
                <div>
                    <h2>{homedata.head}</h2>
                </div>
                <div>
                       <p className="home3-p">{homedata.text}</p>
                </div>
                </div>
              ))  
            }
      
        
        </div>
       
    </div>  
  
    <div className="col-12 col-md-4">
        <div>
            <img className="home3-img" src="./blog13.jpg"></img>
        </div>
</div>
</div>
</div>


<div className="container mt-5">
<div className="row">
    
<div className="col-md-1"></div>
   
    <div className="col-12 col-md-4">
        <div>
            <img className="home3-img" src="./blog13.jpg"></img>
        </div>
    </div>
    <div className="col-12 col-md-6">
        <div className="row">
            {
              home3data.map((homedata , index)=>(
                <div className="col-md-12">
                <div>
                    <h5 className="home3-h">{homedata.num}</h5>
                </div>
                <div>
                    <h2>{homedata.head}</h2>
                </div>
                <div>
                       <p className="home3-p mx-1 my-1">{homedata.text}</p>
                </div>
                </div>
              ))  
            }
      
        
        </div>
       
    </div>  

</div>
</div>


</>

   );



}
 export default HomeP3;