import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
     <div id="navbar">
  <div id="navbar_left"><a href="index.html"><img src="https://www.redbus.in/bushire/static/webv2/home/logo-rb.svg" alt /></a>
    <p><Link to={"/busticket"}>BUS TICKET</Link></p>
    <p><Link to={"/ryde"}>rYde</Link></p>
    <p><a href="rPool.html">rPool</a></p>
  </div>
  <div id="navbar_right">
    <div>  <p><a href="#">Manage Booking</a></p> <img src="https://www.redbus.in/bushire/static/webv2/home/2%20(6).svg" alt />
    </div>
    <div> <p><img src="https://www.redbus.in/bushire/static/mwebv2/header/ic-user-not-logged-in.svg" alt />
        <img src="https://www.redbus.in/bushire/static/webv2/home/2%20(6).svg" alt /> </p></div>
  </div>
</div>

    );
}

export default Header;