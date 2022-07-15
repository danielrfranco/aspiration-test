import React from 'react';
import { shallow } from 'enzyme';
import Chip from '@mui/material/Chip';
import Badge from '@mui/material/Badge';
import Topic from './Topic';


describe('<Topic />', () => {
  it('Renders correctly', () => {
    const topic = {
      id: 'asdf123',
      name: 'react',
      stargazerCount: 23,
      onClick: () => { console.log('clicked') },
    };
    
    const wrapper = shallow(
      <Topic
        id={topic.id}
        name={topic.name}
        stargazerCount={topic.stargazerCount}
        onClick={topic.onClick}
      />
    );
    const label = wrapper.find(Chip);
    expect(label.dive().find('.MuiChip-label').text()).toBe('react');
  
    const badge = wrapper.find(Badge);
    expect(badge.dive().dive().find('.MuiBadge-badge').text()).toBe('23');
  });
})