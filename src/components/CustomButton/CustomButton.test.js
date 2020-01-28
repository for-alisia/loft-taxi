import React from 'react';
import CustomButton from './CustomButton';
import { shallow } from 'enzyme';

describe('Custom Button component', () => {
    const commonClass = '.form-submit';
    it('renders custom button', () => {
        expect(shallow(<CustomButton />)).toMatchSnapshot();
    });

    it('adds correct classes to button', () => {
        const wrapper = shallow(<CustomButton classes='inverse-btn' />);
        expect(wrapper.find(commonClass).hasClass('inverse-btn')).toEqual(true);
    });

    it('has correct type of button', () => {
        const wrapper = shallow(<CustomButton type='submit' />);
        expect(wrapper.find('[type="submit"]')).toHaveLength(1);
    });

    it('calls click function', () => {
        const mockHandleClick = jest.fn();
        const wrapper = shallow(<CustomButton handleClick={mockHandleClick} />);
        wrapper.find(commonClass).simulate('click');
        expect(mockHandleClick.mock.calls.length).toBe(1);
    });

    it('renders correct label', () => {
        const wrapper = shallow(<CustomButton>Label</CustomButton>);
        expect(wrapper.find(commonClass).text()).toEqual('Label');
    });
});
