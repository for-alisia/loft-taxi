import React, { Component } from 'react';
import './Menu.css';

export default class Menu extends Component {
    items = [
        { name: 'Карта', page: 'MapPage' },
        { name: 'Профиль', page: 'Profile' },
        { name: 'Выйти', page: 'Login' }
    ];

    changePage = e => {
        e.preventDefault();
        const page = e.target.dataset.page;
        this.props.onPageChange(page);
    };

    render() {
        const menuItems = this.items.map(({ name, page }) => {
            return (
                <button
                    className='Menu__item'
                    key={page}
                    data-page={page}
                    onClick={this.changePage}
                >
                    {name}
                </button>
            );
        });
        return <nav className='Menu'>{menuItems}</nav>;
    }
}
