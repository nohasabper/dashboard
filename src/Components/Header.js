import React from 'react'

export default function Header() {
  return (
    // <!-- Navbar -->
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
    {/* Left navbar links */}
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <a href="index3.html" className="nav-link">Home</a>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <a  className="nav-link">Contact</a>
      </li>
    </ul>
 
  </nav>
  
      /* <!-- /.navbar --> */  )
}
