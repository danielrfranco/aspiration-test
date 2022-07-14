import React from 'react';
import Topic from './Topic';
import { shallow } from 'enzyme';

test('<Topic /> renders correctly', () => {
  const topic = {
    id: 'asdf123',
    name: 'react',
    stargazerCount: 23,
    onClick: () => {},
  };
  const wrapper = shallow(
    <Topic
      id={topic.id}
      name={topic.name}
      stargazerCount={topic.stargazerCount}
      onClick={topic.onClick}
    />
  );
  const span = wrapper.find('.MuiChip-label');
  expect(span.text()).toBe('react');
});