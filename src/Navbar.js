import './App.css';
import {NavLink} from 'react-router-dom';
function Navbar(){
    return(
      <div className="">
      <nav class="navbar navbar-expand-lg navbar-light ">
    <div class="container">
      <NavLink class="navbar-brand" to="/">Navbar</NavLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <NavLink class="nav-link active" aria-current="page" to="/">Home</NavLink>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link" to="/about">About</NavLink>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link" to="/service">Service</NavLink>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link" to="/contact">Contact</NavLink>
          </li>
  
  
        </ul>
        <form class="d-flex ">
        <button class="btn btn1 ms-4 me-4" type="submit">SignUp</button>
        <button class="btn btn2" type="submit">Login</button>
        </form>
      </div>
    </div>
  </nav>
  </div>


        );}
 export default Navbar;     