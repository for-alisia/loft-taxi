import React, { Component } from 'react';
import { route, initialPage } from '../helpers/config';
import Header from '../components/Header';
import './App.scss';

export default class extends Component {
    state = {
        page: initialPage.page,
        pageName: initialPage.name
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
        const { page: Page, pageName, isLoggined } = this.state;
        return (
            <div className='app'>
                {route[pageName].isHeader ? (
                    <Header
                        onPageChange={this.handlerPageChange}
                        page={pageName}
                    />
                ) : null}
                <Page
                    onPageChange={this.handlerPageChange}
                    isLoggined={isLoggined}
                />
            </div>
        );
    }
}
