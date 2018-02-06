import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';

const tree = renderer
        .create(
            <MemoryRouter>
                <Header/>
            </MemoryRouter>
        )
        .toJSON();

it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
});