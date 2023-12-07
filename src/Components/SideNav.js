import React from 'react'
// import { NavLink } from 'react-router-dom';

export default function SideNav() {
  return (
    <>

<aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  <a href="/" className="brand-link">
    <img src="/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    <span className="brand-text font-weight-light">AdminLTE 3</span>
  </a>
  {/* Sidebar */}
  <div className="sidebar">
  
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
        <li className="nav-item menu-open">
          <a href="/" className="nav-link active">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Dashboard
              <i className="right fas fa-angle-left" />
            </p>
          </a>
          {/* <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="./index.html" className="nav-link active">
                <i className="far fa-circle nav-icon" />
                <p>Dashboard v1</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="./index2.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Dashboard v2</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="./index3.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Dashboard v3</p>
              </a>
            </li>
          </ul> */}
        </li>
        {/* <li className="nav-item">
          <a href="pages/widgets.html" className="nav-link">
            <i className="nav-icon fas fa-th" />
            <p>
              Widgets
              <span className="right badge badge-danger">New</span>
            </p>
          </a>
        </li> */}
        <li className="nav-item">
          <a href="/" className="nav-link">
            <i className="nav-icon fas fa-copy" />
            <p>
            CompanySitting
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="/company-sitting/" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Store</p>
              </a>
            </li>
          
          </ul>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link">
            <i className="nav-icon fas fa-copy" />
            <p>
            CompanySitting
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="/" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Store</p>
              </a>
            </li>
          
          </ul>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link">
            <i className="nav-icon fas fa-copy" />
            <p>
            CompanySitting
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="/" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Store</p>
              </a>
            </li>
          
          </ul>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link">
            <i className="nav-icon fas fa-copy" />
            <p>
            CompanySitting
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="/" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Store</p>
              </a>
            </li>
          
          </ul>
        </li>
    
       </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>

</>


  )
}
