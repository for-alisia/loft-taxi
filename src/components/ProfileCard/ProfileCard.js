import React, { Component } from 'react';
import './ProfileCard.scss';

export default class ProfileCard extends Component {
    state = {
        profileCardNumber: '',
        profileCardDateExpire: '',
        profileCardName: '',
        profileCardCVC: ''
    };

    onInputChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.onPageChange('MapPage');
    };

    render() {
        const {
            propfileCardNumber,
            profileCardDateExpire,
            profileCardName,
            profileCardCVC
        } = this.state;
        return (
            <div className='ProfileCard'>
                <form
                    className='ProfileCard__form form'
                    onSubmit={this.onSubmit}
                >
                    <h2 className='ProfileCard__form-title form-title'>
                        Способ оплаты
                    </h2>
                    <p className='ProfileCard__form-text form-text'>
                        Заполните данные карты для оплаты
                    </p>

                    <div className='ProfileCard__form-row'>
                        <div className='ProfileCard__form-card form-card form-card--front'>
                            <input
                                className='ProfileCard__input form-input'
                                type='text'
                                placeholder='Введите номер карты'
                                id='profileCardNumber'
                                onChange={this.onInputChange}
                                value={profileCardNumber}
                            />
                            <label
                                className='ProfileCard__label form-label'
                                htmlFor='profileCardNumber'
                            >
                                Номер карты:
                            </label>
                            <input
                                className='ProfileCard__input ProfileCard__input--short form-input'
                                type='text'
                                placeholder='Срок действия'
                                id='profileCardDateExpire'
                                onChange={this.onInputChange}
                                value={profileCardDateExpire}
                            />
                            <label
                                className='ProfileCard__label form-label'
                                htmlFor='profileCardDateExpire'
                            >
                                Срок действия:
                            </label>
                        </div>
                        <div className='ProfileCard__form-card form-card form-card--back'>
                            <input
                                className='ProfileCard__input form-input'
                                type='text'
                                placeholder='Введите имя владельца'
                                id='profileCardName'
                                onChange={this.onInputChange}
                                value={profileCardName}
                            />
                            <label
                                className='ProfileCard__label form-label'
                                htmlFor='profileCardName'
                            >
                                Имя владельца
                            </label>
                            <input
                                className='ProfileCard__input form-input ProfileCard__input--short'
                                type='text'
                                placeholder='CVC'
                                id='profileCardCVC'
                                onChange={this.onInputChange}
                                value={profileCardCVC}
                            />
                            <label
                                className='ProfileCard__label form-label'
                                htmlFor='profileCardCVC'
                            >
                                CVC
                            </label>
                        </div>
                    </div>
                    <input
                        className='ProfileCard__submit form-submit'
                        type='submit'
                        value='Сохранить'
                    />
                </form>
            </div>
        );
    }
}
