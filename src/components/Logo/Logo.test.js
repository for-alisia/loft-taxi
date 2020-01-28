import React from 'react';
import Logo from './Logo';
import { shallow } from 'enzyme';

describe('Logo component', () => {
    it('renders logo customs', () => {
        expect(shallow(<Logo />)).toMatchSnapshot();
    });
});
