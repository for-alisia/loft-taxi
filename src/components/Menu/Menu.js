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
            let clazz = 'Menu__item';
            if (this.props.page === page) {
                clazz += ' active';
            }
            return (
                <button
                    className={clazz}
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
