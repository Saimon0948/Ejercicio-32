import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './modules/auth/pages/LoginPage';
import Dashboard from './modules/auth/components/Dashboard';

function App() {
  const routes = createBrowserRouter([
    { path: '/', element: <LoginPage /> },
    { path: '/login', element: <LoginPage /> },
    { path: '/app', element: <Dashboard /> },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
