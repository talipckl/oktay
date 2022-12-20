import React from 'react'
import { Link } from 'react-router-dom';
import R from './R.png';
 
const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
     
     <img src={R} style={{"width":"85px" ,"height":"80px","marginRight":"0.5rem"}} alt="site-logo"/> 

    <a className="siteLogo" style={{"font-size":"30px", "text-decoration":"none" ,"textShadow":"red 1px 2px", "color":"black", "font-weight":"bold", "marginRight":"2rem"}} href="#">REACTFLIX</a>

    
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link className="nav-link" to="/">Anasayfa <span className="sr-only"></span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">Hakkımızda</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link " to="/add">Dizi/Film ekle</Link>
        </li>
      </ul>
    </div>
  </nav>
  )
}
export default Nav;