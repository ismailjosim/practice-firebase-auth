import { createBrowserRouter } from 'react-router-dom';
import Home from '../Home';
import Main from '../Layouts/Main';
import Services from '../Services';
import UserLogin from '../UserLogin';
import UserRegister from '../UserRegister';







const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <h2>Error Found!</h2>,
        children: [
            { path: '/', element: <Home /> },
            { path: '/home', element: <Home /> },
            { path: '/services', element: <Services /> },
            { path: '/login', element: <UserLogin /> },
            { path: '/signup', element: <UserRegister /> },
        ]
    },
])

export default router;
