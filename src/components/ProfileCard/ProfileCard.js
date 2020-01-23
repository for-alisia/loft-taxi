import React, { Component } from 'react';
import { formCardData } from '../../helpers/config';
import { updateStateInputs, validateInput } from '../../helpers/functions';
import Input from '../Input';
import './ProfileCard.scss';

export default class ProfileCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: formCardData
        };

        updateStateInputs(this.state.data, this.state);
    }

    handleInputChange = (e, name) => {
        const currentInput = { ...this.state[name] };
        currentInput.value = e.target.value;
        this.setState({
            [name]: currentInput
        });
    };

    handleInputBlur = (e, name) => {
        const currentInput = validateInput(this.state[name]);

        this.setState({
            [name]: currentInput
        });
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.onPageChange('MapPage');
    };

    render() {
        const { title, subtitle, submitLabel, inputs } = this.state.data;

        const formInputs = inputs.map(({ name }) => {
            const {
                type,
                placeholder,
                label,
                id,
                value,
                errorMsg,
                hasError,
                validation,
                classes
            } = this.state[name];
            return (
                <Input
                    type={type}
                    placeholder={placeholder}
                    label={label}
                    key={id}
                    name={name}
                    value={value}
                    onInputChange={e => this.handleInputChange(e, name)}
                    errorMsg={errorMsg}
                    onBlur={e => this.handleInputBlur(e, name)}
                    hasError={hasError}
                    validation={validation}
                    classes={classes}
                />
            );
        });
        const frontSideInputs = formInputs.slice(0, 2);
        const backSideInputs = formInputs.slice(2);

        return (
            <div className='ProfileCard'>
                <form
                    className='ProfileCard__form form'
                    onSubmit={this.onSubmit}
                >
                    <h2 className='ProfileCard__form-title form-title'>
                        {title}
                    </h2>
                    <p className='ProfileCard__form-text form-text'>
                        {subtitle}
                    </p>

                    <div className='ProfileCard__form-row'>
                        <div className='ProfileCard__form-card form-card form-card--front'>
                            {frontSideInputs}
                        </div>
                        <div className='ProfileCard__form-card form-card form-card--back'>
                            {backSideInputs}
                        </div>
                    </div>
                    <input
                        className='ProfileCard__submit form-submit'
                        type='submit'
                        value={submitLabel}
                    />
                </form>
            </div>
        );
    }
}
