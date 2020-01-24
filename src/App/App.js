import React, { Component } from 'react';
import { route, initialPage } from '../helpers/config';
import Header from '../components/Header';
import MapPage from '../pages/MapPage';
import { theme } from 'loft-taxi-mui-theme'; // Есть еще Logo и MSIcon
import { ThemeProvider } from '@material-ui/core/styles';
import { login, logout, signUp } from '../helpers/auth';
import { AuthContext } from '../helpers/context';
import { auth, createUserProfileDocument } from '../firebase/firebase-utils';

import './App.scss';

export default class extends Component {
    state = {
        page: initialPage.page,
        pageName: initialPage.name,
        authData: {
            login,
            logout,
            signUp,
            isLogined: false,
            currentUser: null
        }
    };

    logOutFromApp = null;

    componentDidMount() {
        this.logOutFromApp = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    const newAuthData = { ...this.state.authData };
                    newAuthData.currentUser = {
                        id: snapShot.id,
                        ...snapShot.data()
                    };
                    newAuthData.isLogined = true;
                    const page = userAuth ? MapPage : initialPage.page;
                    const pageName = userAuth ? 'MapPage' : initialPage.name;
                    this.setState({ authData: newAuthData, page, pageName });
                });
            } else {
                this.setState({
                    currentUser: userAuth
                });
            }
        });
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    componentWillUnmount() {
        this.logOutFromApp();
    }

    handlerPageChange = pageName => {
        const { page, name } = route[pageName];

        this.setState({
            page: page,
            pageName: name
        });
    };

    render() {
        const { page: Page, pageName, authData } = this.state;

        return (
            <div className='app'>
                <AuthContext.Provider value={authData}>
                    <ThemeProvider theme={theme}>
                        {route[pageName].isHeader ? (
                            <Header
                                onPageChange={this.handlerPageChange}
                                page={pageName}
                            />
                        ) : null}
                        <Page onPageChange={this.handlerPageChange} />
                    </ThemeProvider>
                </AuthContext.Provider>
            </div>
        );
    }
}
