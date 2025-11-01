import React from 'react';
import { NavLink } from 'react-router-dom';

function Dashboard() { 

const [open, setOpen] = React.useState(false);
    return (
        <div className="
        h-full
        grid
        grid-cols-1
        grid-rows-[auto_1fr]
          ">
            <h1 className='border border-amber-400
            flex 
            items-center
            justify-between
            p-4'>
                <span>Cabecera</span>
                <button className='' >&#9776;</button>
                
            
            
            </h1>
            <main className='border border-amber-600'>Contenido</main>
            <aside className={`border border-amber-500
            absolute
            top-0
            bottom-0
            bg-gray-200
            ${open ? 'left-0' : '-left-full'}
            `}>
                <ul>
                    <li><NavLink to="/login">Login</NavLink></li>
                </ul>
            </aside>
        </div>
    );
} export default Dashboard;