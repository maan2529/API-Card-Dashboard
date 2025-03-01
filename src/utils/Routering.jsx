import React from 'react';
import Body from '../Components/Body';
import Details from '../Components/Details';
import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import Create from '../Components/Create';
import Edit from '../Components/Edit';
function Routing() {
    
    return (
        <Routes>
            <Route path="/" element={<Body />} />
            <Route path="details/:id" element={<Details />} />
            <Route path="/create" element={<Create />} />
            <Route path='/edit/:id' element={<Edit />} />
        </Routes>
    )
}

export default Routing;