import React from 'react';
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import BusTicket from '../../container/BusTicket/BusTicket';
import Ryde from '../../container/Ryde/Ryde';

function UserRoute(props) {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path='/busticket' element={<BusTicket/>}/>
                <Route path='/ryde' element={<Ryde/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default UserRoute;