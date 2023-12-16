import React from 'react'
import { NavLink } from 'react-router-dom';

export default function SideNav() {
  return (
    <>

<aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  <NavLink className="brand-link">
    <img src="/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    <span className="brand-text font-weight-light">AdminLTE 3</span>
  </NavLink>
  {/* Sidebar */}
  <div className="sidebar">
  
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}

        <li className="nav-item">
          <NavLink className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Dashboard
              <i className="right fas fa-angle-left" />
            </p>
          </NavLink>
         
        </li>
       
        <li className="nav-item ">
            <NavLink className="nav-link">
              <i className="nav-icon fas fa-tachometer-alt"></i>
              <p>
              CompanySitting

                <i className="right fas fa-angle-left"></i>
              </p>
            </NavLink>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <NavLink to="/company-sitting/" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>store</p>
                </NavLink>
              </li>
             
            </ul>
          </li>
          <li className="nav-item ">
            <NavLink  className="nav-link">
              <i className="nav-icon fas fa-tachometer-alt"></i>
              <p>
              CompanySitting

                <i className="right fas fa-angle-left"></i>
              </p>
            </NavLink>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>store</p>
                </NavLink>
              </li>
             
            </ul>
          </li>
          {/* <li class="nav-item">
            <NavLink class="nav-link">
              <i class="nav-icon fas fa-table"></i>
              <p>
                Tables
                <i class="fas fa-angle-left right"></i>
              </p>
            </NavLink>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="../tables/simple.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Simple Tables</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="../tables/data.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>DataTables</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="../tables/jsgrid.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>jsGrid</p>
                </a>
              </li>
            </ul>
          </li> */}
   
       </ul> 
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>

</>


  )
}

