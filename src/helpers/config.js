import Login from '../pages/Login';
import MapPage from '../pages/MapPage';
import Profile from '../pages/Profile';

const route = {
    MapPage: {
        page: MapPage,
        name: 'MapPage',
        label: 'Карта',
        isHeader: true
    },
    Profile: {
        page: Profile,
        name: 'Profile',
        label: 'Профиль',
        isHeader: true
    },
    Login: {
        page: Login,
        name: 'Login',
        label: 'Выйти',
        isHeader: false
    }
};

const initialPage = route.Login;

export { route, initialPage };
