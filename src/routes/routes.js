import config from '~/config';

// Layouts
import AuthLayout from '~/layouts';
import MainLayout from '~/layouts/MainLayout';

// Pages
import Home from '~/pages/Home/Home';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Login from '~/pages/Login/Login';
import Register from '~/pages/Register/Register';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home, layout: MainLayout },
    { path: config.routes.login, component: Login, layout: AuthLayout },
    { path: config.routes.register, component: Register, layout: AuthLayout },
    { path: config.routes.profile, component: Profile, layout: MainLayout },
    { path: config.routes.search, component: Search, layout: MainLayout },
    { path: config.routes.shop, component: Search, layout: MainLayout },
    { path: config.routes.videos, component: Search, layout: MainLayout },
    { path: config.routes.stories, component: Search, layout: MainLayout },
];

export { publicRoutes };
