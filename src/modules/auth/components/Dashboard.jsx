import React from 'react';
import { NavLink } from 'react-router-dom';

function Dashboard() {
    const [open, setOpen] = React.useState(false);
    const navClass = ({isActive}) => 
        isActive 
            ? 'font-bold bg-purple-300 rounded-2xl pl-10 pr-10' 
            : '';

    return (
        <div className="h-full grid grid-cols-1 grid-rows-[auto_1fr]">
            <h1 className="border border-fuchsia-400 flex items-center justify-between p-4">
                <span>Cabecera</span>
                <button 
                    className="bg-fuchsia-300" 
                    onClick={() => setOpen(prev => !prev)}
                >
                    &#9776;
                </button>
            </h1>

            <main className="border border-fuchsia-400 p-4">
                Contenido
            </main>

            <aside className={`
                border border-fuchsia-400
                absolute
                top-0
                bottom-0
                p-6
                bg-gray-200
                ${open ? 'left-0' : '-left-full'}
            `}>
                SideBar
                <ul>
                    <li>
                        <NavLink 
                            to="/admin/principal"
                            className={navClass}
                        >
                            Principal
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/admin/productos"
                            className={navClass}
                        >
                            Productos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/admin/ordenes"
                            className={navClass}
                        >
                            Ordenes
                        </NavLink>
                    </li>
                </ul>
            </aside>
        </div>
    );
}

export default Dashboard;