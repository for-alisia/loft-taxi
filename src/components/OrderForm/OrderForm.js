import React from 'react';

import './OrderForm.scss';

const OrderForm = () => {
    return (
        <div className='OrderForm'>
            <form className='OrderForm__form form'>
                <input
                    className='OrderForm__form-submit form-submit'
                    type='submit'
                    value='Вызвать такси'
                />
            </form>
        </div>
    );
};

export default OrderForm;
