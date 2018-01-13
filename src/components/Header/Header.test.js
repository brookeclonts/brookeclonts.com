import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const breakpoints = {
        tab: '768px',
        mob: '300px',
        desktop: '1200px',
      }
      const colors = {
        green: '#B2B8B4',
        blueGray: '#484B5A',
        pink: '#F5D0D7',
        darkPink: '#c4a6ac',
        white: '#FEFFFF',
        medGray: '#5D5C62',
        gold: '#BAA262',
        trueWhite: '#ffffff'
      }
    const tree = renderer
        .create(<Header colors={colors} breakpoints={breakpoints}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});