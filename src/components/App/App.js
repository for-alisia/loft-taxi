import React, { Component } from 'react';
import Login from '../Login/Login';
import MapPage from '../MapPage/MapPage';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import './App.css';

export default class extends Component {
    route = [{ Login }, { MapPage }, { Profile }, { Register }];

    state = {
        page: Login // initial page
    };

    onPageChange = page => {
        this.setState({ page: this.definePage(page) });
    };

    definePage(page) {
        const [comp] = this.route.filter(el => el[page]);
        return comp[page];
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
