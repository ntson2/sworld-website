import React from 'react';
import ContactPage from "./contactPage";
import {shallow} from 'enzyme';
import {FormLayout,TextField} from '@shopify/polaris';
import { expect } from 'chai';

test('Contact page render with all components', () => {
    const component = shallow(<ContactPage/>);

    expect(component.find(FormLayout)).to.have.lengthOf(1);
    expect(component.find(TextField)).to.have.lengthOf(4);
});
