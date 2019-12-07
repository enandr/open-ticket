import React from 'react';
import LogOut from './logoutIcon';

export default function MyProjectListNav(props) {
  return (
    <nav className="navbar navbar-expand-lg color fixed-top">
      <a className="navbar-brand navTitle">Projects</a>
      <LogOut click={props}/>
    </nav>
  );

}
