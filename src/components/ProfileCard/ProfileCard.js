import React, { Component } from 'react';
import './ProfileCard.css';

export default class ProfileCard extends Component {
    render() {
        return (
            <div className='ProfileCard'>
                <form className='ProfileCard__form form'>
                    <h2 className='ProfileCard__form-title form-title'>
                        Введите данные карты
                    </h2>
                </form>
            </div>
        );
    }
}
