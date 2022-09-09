import React from 'react'
import Cell from './Cell';
import Ships from 'assets/static/ship';
import { Provider } from 'react-redux';
import store from 'redux/store';

export default {
  title: 'Cell',
  component: Cell,
  decorators: [story => <Provider store={store}>{story()}</Provider>]
};

const cellStyle = {
  width: '50px',
  height: '50px'
};


const Template = args => <Cell {...args} style={cellStyle} />;
export const Default = Template.bind({});

//export const Default = props => <Cell {...props} style={cellStyle}/>;

export const Hit = props => <Cell {...props} ship={Ships[0]} style={cellStyle}/>;