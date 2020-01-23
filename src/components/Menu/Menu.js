import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { route } from '../../helpers/config';
import './Menu.scss';

export default class Menu extends Component {
    static propTypes = {
        page: PropTypes.oneOf(['MapPage', 'Login', 'Profile']).isRequired
    };

    handleChangePage = e => {
        e.preventDefault();
        const page = e.target.dataset.page;
        this.props.onPageChange(page);
    };

    render() {
        const menuItems = Object.keys(route).map(item => {
            const { label, name } = route[item];
            let className = ['Menu__item'];
            if (this.props.page === name) {
                className.push('active');
            }

            return (
                <button
                    className={className.join(' ')}
                    key={name}
                    data-page={name}
                    onClick={this.handleChangePage}
                >
                    {label}
                </button>
            );
        });

        return <nav className='Menu'>{menuItems}</nav>;
    }
}
