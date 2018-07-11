import ErrorBoundary from '../../components/ErrorBoundary';
import React from 'react';
import { shallow, mount } from 'enzyme';


describe('Error Boundary', () => {
    test('Should match snapshot', () => {
        const Wrapper = shallow(<ErrorBoundary><div><h1>Hi!</h1></div></ErrorBoundary>);
        expect(Wrapper).toMatchSnapshot();
    });
});

