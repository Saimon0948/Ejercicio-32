import React from 'react';
import { NavLink } from 'react-router-dom';

function Dashboard() { 


    return (
        <div>
            <h1>Hola a Todos!</h1>
            <ul><li><NavLink to="/login">Login</NavLink></li></ul>
        </div>
    );
} export default Dashboard;