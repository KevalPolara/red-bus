import React from 'react';
import Layout from '../../components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import Bus from '../../admin/container/Bus/Bus';

function AdminRoute(props) {
    return (
        <div>
        <Layout>
            <Routes>
                <Route exact path='/bus' element={<Bus/>} ></Route>
            </Routes>
        </Layout>
        </div>
    );
}

export default AdminRoute;