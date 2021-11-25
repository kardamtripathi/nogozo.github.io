import logo from './logo.svg';
import './App.css';
import React from 'react';
function App() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"></a>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
          
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
<button class="btn"><i class="fa fa-home"></i> Home</button>

        <li className="nav-item">
          <a className="nav-link" style={{ marginLeft: '3.9rem' }} href="#">My Orders</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{ marginLeft: '3.9rem' }} href="#">My Offers</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{ marginLeft: '3.9rem' }} href="#">TNC</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{ marginLeft: '3.9rem' }} href="#">Contact Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{ marginLeft: '3.9rem' }} href="#">Login</a>
        </li>
        
          <button type="button" class="btn btn-primary" style={{ marginLeft: '3.9rem' }}>
  Cart <span class="badge bg-secondary" >0</span>
</button>
        
        
        <li className="nav-item dropdown">
          
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#"></a></li>
            <li><a className="dropdown-item" href="#"></a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#"></a></li>
          </ul>
        </li>
        <li class="nav-item">
          
        </li>
      </ul>
      
<div class="btn-group">
  <button type="button" class="btn btn-danger" style={{ marginLeft: '3.9rem' }}>Books</button>
  <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Class 9</a></li>
    <li><a class="dropdown-item" href="#">Class 10</a></li>
    <li><a class="dropdown-item" href="#">Class 11</a></li>
    <li><a class="dropdown-item" href="#">Class 12</a></li>
    <li><a class="dropdown-item" href="#">IIT-JEE</a></li>
    <li><a class="dropdown-item" href="#">NEET</a></li>
    <li><a class="dropdown-item" href="#">Novels</a></li>
    <li><a class="dropdown-item" href="#">Biographies</a></li>
    
    <li><a class="dropdown-item" href="#">More...</a></li>
  </ul>
</div>
 
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search Books"  style={{ marginLeft: '3.9rem' }} aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>    
 
</>
  );
}

export default App;
