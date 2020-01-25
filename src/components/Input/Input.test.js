import React from 'react';
import Input from './Input';
import { shallow } from 'enzyme';

describe('Input component', () => {
    const commonClass = '.form-input';

    it('renders input component', () => {
        expect(shallow(<Input />)).toMatchSnapshot();
    });

    it('renders invalid input', () => {
        const wrapper = shallow(<Input hasError={true} />);

        expect(wrapper.find(commonClass).hasClass('invalid')).toEqual(true);
    });

    it('calls function on each change', () => {
        const mockHandleChangeInput = jest.fn();
        const wrapper = shallow(
            <Input onInputChange={mockHandleChangeInput} />
        );

        wrapper.find(commonClass).simulate('change');
        wrapper.find(commonClass).simulate('change');

        expect(mockHandleChangeInput.mock.calls.length).toBe(2);
    });

    it('shows error block with invalid input', () => {
        const wrapper = shallow(<Input hasError={true} errorMsg='error' />);

        expect(wrapper.find('.form-input-error')).toHaveLength(1);
    });

    it('shows error message with invalid input', () => {
        const wrapper = shallow(<Input hasError={true} errorMsg='error' />);

        expect(wrapper.find('.form-input-error').text()).toEqual('error');
    });

    it('call handler after click event on icon', () => {
        const mockOnClearInput = jest.fn();
        const wrapper = shallow(<Input onClearInput={mockOnClearInput} />);

        wrapper.find('.form-input-icon').simulate('click');

        expect(mockOnClearInput.mock.calls.length).toBe(1);
    });

    it('shows * with required inputs', () => {
        const wrapper = shallow(<Input validation={{}} />);

        expect(wrapper.find('.form-label span')).toHaveLength(1);
    });

    it('contains correct type of input', () => {
        const wrapper = shallow(<Input type='password' />);

        expect(wrapper.find('[type="password"]')).toHaveLength(1);
    });
});
