import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './modules/auth/pages/LoginPage';
import Dashboard from './modules/auth/components/Dashboard';

function App() {
  const routes = createBrowserRouter([
    //{ path: '/', element: <LoginPage /> },
    { path: '/login', element: <LoginPage /> },
    { 
      path: '/admin', 
      element: <Dashboard />,
      children: [
        { path: 'principal', element: <div>Panel Principal</div> },
        { path: 'productos', element: <div>Lista de Productos</div> },
        { path: 'ordenes', element: <div>Lista de Órdenes</div> }
      ]
    },
    { path: '/', element: <LoginPage /> }
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
