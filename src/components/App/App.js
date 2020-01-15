import React, { Component } from 'react';
import Login from '../Login/Login';
import MapPage from '../MapPage/MapPage';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import './App.css';

export default class extends Component {
    route = [
        ['Login', Login],
        ['MapPage', MapPage],
        ['Profile', Profile],
        ['Register', Register]
    ];

    state = {
        page: Login
    };

    onPageChange = page => {
        const comp = this.definePage(page);
        this.setState({ page: comp });
    };

    definePage(page) {
        const [comp] = this.route.filter(el => el[0] === page);
        return comp[1];
    }

    render() {
        const Page = this.state.page;

        return (
            <div>
                <Page onPageChange={this.onPageChange} />
            </div>
        );
    }
}
