import React, { Component } from 'react';
import { route, initialPage } from '../helpers/config';
import Header from '../components/Header';
import { theme } from 'loft-taxi-mui-theme'; // Есть еще Logo и MSIcon
import { ThemeProvider } from '@material-ui/core/styles';
import { login, logout } from '../helpers/auth';
import { AuthContext } from '../helpers/context';
import './App.scss';

export default class extends Component {
    state = {
        page: initialPage.page,
        pageName: initialPage.name,
        auth: {
            login,
            logout,
            isLogined: false
        }
    };

    handlerPageChange = pageName => {
        const { page, name } = route[pageName];

        this.setState({
            page: page,
            pageName: name,
            isLoggined: false
        });
    };

    render() {
        const { page: Page, pageName, auth } = this.state;

        return (
            <div className='app'>
                <AuthContext.Provider value={auth}>
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
