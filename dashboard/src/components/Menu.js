import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

const Menu = () => {

  const [selectedMenu,setSelectedMenu]=useState(0);
  const [isProfileDropdownOpen,setIsProfileDropdownOpen]=useState(false);
  const navigate=useNavigate();

   const menuClass="menu";
   const activeMenuClass="menu selected";

  const handleMenuClick=(index)=>
  {
      setSelectedMenu(index);
      console.log(selectedMenu);
  }

  const handleClick=async()=>{
    await axios.get("http://localhost:3000/logout",{ withCredentials: true })
    .then((response)=>{
          console.log(response);
          navigate("/");  
    })
    .catch((err)=>{
      console.log(err);
    })
  
  }
  
  const handleProfileOpen=()=>{
       setIsProfileDropdownOpen(!isProfileDropdownOpen);
  }

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li onClick={()=>handleMenuClick(0)}>
            <Link style={{textDecoration:"none"}} to="/summary"><p className={selectedMenu===0?activeMenuClass:menuClass}>Dashboard</p></Link>
          </li>
          <li onClick={()=>handleMenuClick(1)}>
          <Link style={{textDecoration:"none"}} to="/orders"><p className={selectedMenu===1?activeMenuClass:menuClass}>Orders</p></Link>
          </li>
          <li onClick={()=>handleMenuClick(2)}>
          <Link style={{textDecoration:"none"}} to="/holdings"><p className={selectedMenu===2?activeMenuClass:menuClass} >Holdings</p></Link>
          </li>
          <li onClick={()=>handleMenuClick(3)}>
          <Link style={{textDecoration:"none"}} to="/positions"><p className={selectedMenu===3?activeMenuClass:menuClass}>Positions</p></Link>
          </li>
          <li onClick={()=>handleMenuClick(4)}>
          <Link style={{textDecoration:"none"}} to="/funds"><p className={selectedMenu===4?activeMenuClass:menuClass}>Funds</p></Link>
          </li>
          <li onClick={()=>handleMenuClick(5)}>
          <Link style={{textDecoration:"none"}} to="/apps"><p className={selectedMenu===5?activeMenuClass:menuClass}>Apps</p></Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileOpen} >
          <div className="avatar">ZU</div>
          
          <button onClick={handleClick} className="btn-light" style={{background:"black"}}>
      <Link style={{textDecoration:"none",color:"white"}} to="/login">   
            Logout
            </Link>
            </button>

        </div>
      </div>
    </div>
  );
};

export default Menu;
