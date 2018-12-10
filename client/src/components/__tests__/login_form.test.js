import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root';
import LoginForm from 'components/login_form';
import StatusMessage from 'containers/status_message';

let wrapped;

beforeEach( () => {
    //wrapped = shallow(<LoginForm />);
    wrapped = mount(<Root><LoginForm /></Root>);
});

afterEach( () => {
  wrapped.unmount();
});

it('contains a status message', () => {
  expect(wrapped.find(StatusMessage).length).toEqual(1);
});
it('has 2 input fields', () => {
  expect(wrapped.find('input').length).toEqual(2);
});

