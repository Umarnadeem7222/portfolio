import React from 'react'
import { Link } from 'react-router-dom'
import home from './home';



export function Header() {
    

    return (
        <>
       <header className="navigation fixed-top" id="fx">
        
        <nav className="navbar navbar-expand-lg navbar-dark">
           <Link className="navbar-brand font-tertiary h3" to={"/"} ><h1 id="hu">HU </h1></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse text-center" id="navigation">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" id="lj" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id="ll" to="/about">about</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" id="ll" to="/blog">blog</Link>
              </li>
              
            </ul>
          </div>
        </nav>
      </header>
            
        </>
    )
}
export default Header;
