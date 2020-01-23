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

const formLoginData = {
    title: 'Войти',
    subtitle: 'Новый пользователь?',
    linkText: 'Зарегистрируйтесь',
    submitLabel: 'Войти',
    inputs: [
        {
            type: 'text',
            placeholder: 'Введите имя пользователя',
            label: 'Имя пользователя',
            required: true,
            validation: {
                required: true
            },
            id: 1,
            name: 'userName',
            errorMsg:
                'Введите имя пользователя или email, указанный при регистрации'
        },
        {
            type: 'password',
            placeholder: 'Введите пароль',
            label: 'Пароль',
            required: true,
            validation: {
                minLength: 6
            },
            id: 2,
            name: 'userPassword',
            errorMsg: 'Введите корректный пароль не менее 6 символов'
        }
    ]
};

const formRegisterData = {
    title: 'Регистрация',
    subtitle: 'Уже зарегистрирован?',
    linkText: 'Войти',
    submitLabel: 'Зарегистрироваться',
    inputs: [
        {
            type: 'email',
            placeholder: 'Введите email',
            label: 'Email',
            validation: {
                email: true
            },
            id: 1,
            name: 'email',
            errorMsg: 'Введите корректный email'
        },
        {
            type: 'text',
            placeholder: 'Ваше имя',
            label: 'Ваше имя',
            validation: {
                required: true
            },
            id: 2,
            name: 'firstName',
            errorMsg: 'Введите имя'
        },
        {
            type: 'text',
            placeholder: 'Ваша фамилия',
            label: 'Ваша фамилия',
            id: 3,
            name: 'lastName'
        },
        {
            type: 'password',
            placeholder: 'Придумайте пароль',
            label: 'Пароль',
            validation: {
                minLength: 6
            },
            id: 4,
            name: 'password',
            errorMsg: 'Пароль должен быть не менее 6 символов'
        }
    ]
};

const formOrderData = {
    submitLabel: 'Вызвать такси'
};

export { route, initialPage, formLoginData, formRegisterData, formOrderData };
