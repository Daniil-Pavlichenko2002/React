// import React from 'react';
import { NavLink } from "react-router-dom";
import Friends from "../Friends/Friends";
import s from "./Navbar.module.css"
// import state from "../../redux/state";

const Navbar = (props) => {
  // console.log(props.state.friends)
  
  return (
    <nav className={s.nav}>
      <div className={`${s.item} ${s.active}`}  >
        <NavLink to="profile" className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="dialogs" className = { navData => navData.isActive ? s.active : s.item }>Message</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="news" className = { navData => navData.isActive ? s.active : s.item }>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="music" className = { navData => navData.isActive ? s.active : s.item }>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="setings" className = { navData => navData.isActive ? s.active : s.item }>Setings</NavLink>
      </div>
      <div className={s.itemfrends}>
      <Friends state={props.state}/>
      </div>
    </nav>
  )
}

export default Navbar;