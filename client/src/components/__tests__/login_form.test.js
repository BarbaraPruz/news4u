import React from 'react';
import { shallow } from 'enzyme';

import LoginForm from 'components/login_form';
import StatusMessage from 'containers/status_message';

let wrapped;

beforeEach( () => {
    wrapped = shallow(<LoginForm />);
});

it('contains a status message', () => {
  //  expect(wrapped.render().text()).toContain("Comment 1");
  //  expect(wrapped.render().text()).toContain("Comment 2");    
  expect(wrapped.find(StatusMessage).length).toEqual(1);
});
